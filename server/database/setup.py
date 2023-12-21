import json
import sqlite3

from database.d_config import DATABASE_PATH, SCHEMA_PATH, TICKERS_PATH, MIN_PERIODS, MAX_PERIODS
from database.prices import get_price_data, get_moving_average


def initialize_db():
    """
    Load the database. Create tables if they don't exist.
    """
    with open(SCHEMA_PATH, "r") as schema_file:
        schema = schema_file.read()

    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    cursor.executescript(schema)
    conn.commit()
    conn.close()


def initialize_prices_averages():
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT ticker FROM tickers")
    tickers = cursor.fetchall()

    for t in tickers:
        ticker = t[0]
        if not prices_exists(cursor, ticker):
            prices = get_price_data(ticker)  
            update_prices(prices=prices, ticker=ticker, conn=conn)    
            for period in range(MIN_PERIODS, MAX_PERIODS + 1):
                sma = get_moving_average(prices, period=period, ma_type="SMA")
                update_moving_averages(ma_df=sma, ma_type="SMA", ticker=ticker, period=period, conn=conn)
                ema = get_moving_average(prices, period=period, ma_type="EMA")
                update_moving_averages(ma_df=ema, ma_type="EMA", ticker=ticker, period=period, conn=conn)

    conn.commit()
    conn.close()
        

def initialize_tickers():
    """
    Load in tickers. Create them if they do not exist.
    """
    with open(TICKERS_PATH, "r") as tickers_file:
        tickers = json.load(tickers_file)

    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    for row in tickers:
        ticker = row["ticker"]
        base = row["base"]
        quote = row["quote"]

        if not ticker_exists(cursor, ticker):
            cursor.execute("INSERT INTO tickers (ticker, base, quote) VALUES (?,?,?)", (ticker, base, quote))
    
    conn.commit()
    conn.close()


def prices_exists(cursor, ticker):
    """ 
    Checks to see if the ticker has price data 
    """
    cursor.execute("SELECT COUNT(ticker) FROM prices WHERE ticker = ?", (ticker,))
    count = cursor.fetchone()[0]
    return count > 0


def ticker_exists(cursor, ticker):
    """ 
    Checks to see if the ticker is in the table 
    """
    cursor.execute("SELECT COUNT(ticker) FROM tickers WHERE ticker = ?", (ticker,))
    count = cursor.fetchone()[0]
    return count > 0


def setup_database():
    """ Set up the Database """
    initialize_db()
    initialize_tickers()
    initialize_prices_averages()


def update_prices(prices, ticker, conn):
    prices["Ticker"] = ticker
    mapping = {
        "Date": "date",
        "Ticker": "ticker",
        "Open": "open",
        "High": "high",
        "Low": "low",
        "Close": "close"
    } 
    prices.to_sql("prices", conn, if_exists = "append", index=False, dtype=mapping)


def update_moving_averages(ma_df, ma_type, ticker, period, conn):
    ma_df["Ticker"] = ticker
    ma_df["Period"] = period
    mapping = {
        "Date": "date",
        "Ticker": "ticker",
        "Period": "period",
        "Value": "value"
    } 
    if ma_type == "SMA":
        ma_df.to_sql("sma", conn, if_exists = "append", index=False, dtype=mapping)
    elif ma_type == "EMA":
        ma_df.to_sql("ema", conn, if_exists = "append", index=False, dtype=mapping)