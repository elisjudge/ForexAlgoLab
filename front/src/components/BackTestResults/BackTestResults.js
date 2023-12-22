import React, { useState, useEffect } from 'react';
import "./BackTestResults.css"

function BackTestResults() {

    const [message, setMessage] = useState(null);

    useEffect(() => {
      fetch('/api/test')
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => console.error('Fetch error:', error));
    }, []);
  
    return (
        <section id="backtest-results" class="backtest-results">
            <div class="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#1E91E1" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,69.3C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>
            <div class="results-container">
                <div class="result-title">
                    <h1>Backtest Results</h1>    
                </div> 
                <div class="graph-trades-container">
                    <div class="graph-container">
                        {/* Placeholder for a graph */}
                        <div class="graph"> GRAPH GO HERE </div>
                    </div>
                    <div class="trades-container">
                        <table class="trades-table">
                            <tbody>
                                <tr>
                                    <th>Trade Number #</th>
                                    <th>Trade Type</th> {/*Long or Short*/}
                                    <th>Purchase Date </th>{/*  */}
                                    <th>Purchase Price</th>
                                    <th>Purchase Amount</th>
                                    <th>Sale Date</th>
                                    <th>Sale Price</th>
                                    <th>Sale Amount </th>
                                    <th>Gain/Loss</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="stats-table-container">
                    <div class="stats-title">
                        <h3>Backtest Statistics</h3>
                    </div>
                    <div class="statistics">
                        <table class="statistics-table">
                            <tbody>
                                <tr>
                                    <th>Placeholder1</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Placeholder2</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Placeholder3</th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>               
            </div>
            <div>
                <p>Message from Flask: {message}</p>
            </div>
        </section>
    );
}

export default BackTestResults;