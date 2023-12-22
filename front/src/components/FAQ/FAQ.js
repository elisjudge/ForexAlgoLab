import React, { useState } from 'react';
import "./FAQ.css";

function FAQ() {
    // State to track the open FAQ item
    const [openFAQ, setOpenFAQ] = useState(null);

    // Function to toggle FAQ item
    const toggleFAQ = (index) => {
        if (openFAQ === index) {
            setOpenFAQ(null); // Close the current one if it's already open
        } else {
            setOpenFAQ(index); // Open the new one
        }
    };

    return (
        <section id="FAQ">
            <div className="FAQ">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-container">
                    <button className="accordion" onClick={() => toggleFAQ(0)}>
                        What is a Moving Average Cross-Over Strategy?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 0 ? 'block' : 'none' }}>
                        <p>A Moving Average Cross-Over Strategy is a method used in trading and investing to identify the momentum of a market or stock. 
                            It involves using two moving averages (typically a short-term and a long-term average). 
                            A buy signal is generated when the short-term average crosses above the long-term average, indicating an upward trend. 
                            Conversely, a sell signal is triggered when the short-term average crosses below the long-term average, suggesting a downward trend. 
                            This strategy helps smooth out price data to create a trend-following indicator.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(1)}>
                        How do I choose the right moving average periods for my strategy?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 1 ? 'block' : 'none' }}>
                        <p>Choosing the right periods for moving averages depends on your trading strategy and risk tolerance.
                            Shorter periods are more responsive to price changes and are often used for short-term trading. 
                            Longer periods are less sensitive and more suitable for long-term trend analysis. 
                            A common approach is to experiment with different periods to see which combinations align best with your trading goals
                            and historical market performance.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(2)}>
                        Can I use this tool for real-time trading?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 2 ? 'block' : 'none' }}>
                        <p>This tool is designed for backtesting and educational purposes and not for real-time trading decisions. 
                            While it can provide valuable insights into historical performance, it doesn't account for real-time market conditions,
                            news, or other factors that might influence trading decisions.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(3)}>
                        What does 'Amount Risked per Trade' mean?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 3 ? 'block' : 'none' }}>
                        <p>'Amount Risked per Trade' refers to the portion of your trading capital that you are willing to risk 
                            in a single trade. It’s a crucial aspect of risk management in trading. This can be a fixed amount 
                            or a percentage of your total capital. Setting a limit on the amount risked helps in maintaining a 
                            balanced approach to trading and protecting against significant losses.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(4)}>
                        How accurate are the backtesting results?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 4 ? 'block' : 'none' }}>
                        <p>Backtesting results provide an indication of how a strategy would have performed based on historical data. 
                            While they can be a useful tool for assessing a strategy’s effectiveness, they do not guarantee future 
                            performance. Market conditions, economic factors, and other variables can change, and what worked in the 
                            past may not work in the future.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(5)}>
                        Why shouldn't I use the results of this app to trade with real money? 
                    </button>
                    <div className="panel" style={{ display: openFAQ === 5 ? 'block' : 'none' }}>
                        <p>This app is designed for simulation and educational purposes only and does not incorporate real-time 
                            data or comprehensive risk management features required for actual trading. There are hidden costs 
                            associated with trading real money that are not taken into consideration by this app. Furthermore, 
                            the results that come from backtesting often come with what is known as "hindsight bias". This bias
                            involves the backtester optimizing their strategy on the historical data, only to find later that 
                            what might have worked in the past does not work on present market conditions. As a result, this app 
                            should not be used as a sole decision-making tool for real money trades. If you discover a strategy
                            that appears promising, you should always test it on live market data for several months before using
                            real money. </p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(6)}>
                        Does this app offer forward testing?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 6 ? 'block' : 'none' }}>
                        <p>No, this app does not offer forward testing and currently there are no plans to incorporate this capability.
                        </p>
                    </div>
                    <button className="accordion" onClick={() => toggleFAQ(7)}>
                        How often is the data in the app updated?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 7 ? 'block' : 'none' }}>
                        <p>There is only 5 years worth of data available up to December 2023. As this is a portfolio project, there
                            are no plans to update the data in this app. However, you are welcome to visit the github portfolio, 
                            download this project and upgrade it with whatever functionality you wish.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
