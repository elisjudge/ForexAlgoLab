-- CREATE TICKERS TABLE
CREATE TABLE IF NOT EXISTS tickers (
    ticker TEXT,
    base TEXT, -- The currency that is being bought/sold      
    quote TEXT, -- The currency that is being compared to the base
    PRIMARY KEY (ticker)
);

-- CREATE THE PRICES TABLE
CREATE TABLE IF NOT EXISTS prices (
    date TEXT,
    ticker TEXT,
    open REAL,
    high REAL,
    low REAL,
    close REAL,
    PRIMARY KEY (date, ticker),
    FOREIGN KEY (ticker) REFERENCES tickers(ticker)
);

-- CREATE SIMPLE MOVING AVERAGES TABLE
CREATE TABLE IF NOT EXISTS sma (
    date TEXT,
    ticker TEXT,
    period INTEGER,
    value REAL,
    PRIMARY KEY (date, ticker, period),
    FOREIGN KEY (ticker) REFERENCES tickers(ticker)
);

-- CREATE EXPONENTIAL MOVING AVERAGES TABLE
CREATE TABLE IF NOT EXISTS ema (
    date TEXT,
    ticker TEXT,
    period INTEGER,
    value REAL,
    PRIMARY KEY (date, ticker, period),
    FOREIGN KEY (ticker) REFERENCES tickers(ticker)
);
