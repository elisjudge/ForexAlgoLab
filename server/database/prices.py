import yfinance as yf

from database.d_config import START_DATE, END_DATE


def get_price_data(ticker):
    """
    Takes a Ticker and Downloads data from Yahoo Finance using yfinance API
    """
    data = yf.Ticker(ticker=ticker)
    prices = data.history(start=START_DATE, end=END_DATE)
    prices.index = prices.index.strftime('%Y-%m-%d')
    prices.drop(["Volume", "Dividends", "Stock Splits"], axis=1, inplace=True)
    prices = prices.reset_index()
    prices.rename(columns={"index":"Date"}, inplace=True)
    return prices


def get_moving_average(prices, period, ma_type):
    """
    Takes a pandas dataframe of prices and computes a Moving Average based on given period
    """
    if ma_type == "SMA":
        prices["Value"] = prices["Close"].rolling(window=period).mean()
    elif ma_type == "EMA":
        prices["Value"] = prices["Close"].ewm(span=period, min_periods=period, adjust=False).mean()

    prices = prices[["Date","Value"]]
    MA = prices.dropna()
    return MA
    



