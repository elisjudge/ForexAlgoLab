import json
import sqlite3

from database.d_config import DATABASE_PATH, SCHEMA_PATH, TICKERS_PATH
from database.extractor import get_price_data


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
            get_price_data(ticker)
    
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


def prices_exists(cursor,ticker):
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
    initialize_db()
    initialize_tickers()
    initialize_prices_averages()

