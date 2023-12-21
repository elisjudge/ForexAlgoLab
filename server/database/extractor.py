import yfinance as yf

from database.d_config import START_DATE, END_DATE


def get_price_data(ticker):
    data = yf.Ticker(ticker=ticker)
    prices = data.history(start=START_DATE, end=END_DATE)
    print(type(prices))
    
