import "./AnalysisIntroForm.css"

function AnalysisIntroForm(){
    return (
        <section>
            <div class="IntroFormContainer">
                <div class="introBlock">
                    <svg class="svg-circle" width="1000" height="1000">
                        <circle cx="400" cy="600" r="200"></circle>
                    </svg>

                    <h2>About This App</h2>
                    <p>
                        This iteration of this application allows you to test the performance of one very common trading algorithm; Moving Average Cross-Over.
                        You will be able to test the cross-over of different moving average combinations by choosing the type of moving average, and the 
                        number of periods used to compute the average. You will be able to simulate the trades that would have occured given your choices
                        and see how your portfolio would have performed if you followed the strategy.
                    </p>
                    <h3>Caution</h3>
                    <p>
                        This application has been built for education purposes and does <span>NOT</span> constitute financial advice. 
                        Please don't ever trade real money based on the results of any back test alone unless you are happy with
                        losing money. Any trading strategy should be properly tested in real time over several months using demo funds
                        before you consider using you own money. Use this application responsibily.  
                    </p>
                </div>
                <div class="analysisForm">
                    <div class="formBorder">
                        <form id="backtestForm" onSubmit="handleSubmit">
                            {/* Starting Balance */}
                            <div class="inputField">
                                <label for="startingBalance">Starting Balance ($):</label>
                                <input type="number" id="startingBalance" name="startingBalance" placeholder="Enter your starting balance" required />
                            </div>

                            {/* Amount Risked per Trade  */}
                            <div class="inputField">
                                <label for="riskAmount">Amount Risked per Trade:</label>
                                <input type="number" id="riskAmount" name="riskAmount" placeholder="Enter risk amount" required />
                                <select name="riskType" id="riskType">
                                <option value="percent">Percent</option>
                                <option value="fixed">Fixed Amount</option>
                                </select>
                            </div>

                            {/* Security Selection  */}
                            <div class="inputField">
                                <label for="security">Security:</label>
                                <select id="security" name="security">
                                {/* Options will be dynamically populated  */}
                                </select>
                            </div>

                            {/* Moving Average 1 (Short) */}
                            <div class="inputField">
                                <label for="ma1Period">Moving Average 1 (Short) Period:</label>
                                <input type="number" id="ma1Period" name="ma1Period" placeholder="Enter MA1 period" required />
                            </div>
                            <div class="inputField">
                                <label for="ma1Type">Moving Average 1 (Short) Type:</label>
                                <select id="ma1Type" name="ma1Type">
                                <option value="simple">Simple</option>
                                <option value="exponential">Exponential</option>
                                </select>
                            </div>

                            {/* Moving Average 2 (Long)  */}
                            <div class="inputField">
                                <label for="ma2Period">Moving Average 2 (Long) Period:</label>
                                <input type="number" id="ma2Period" name="ma2Period" placeholder="Enter MA2 period" required />
                            </div>
                            <div class="inputField">
                                <label for="ma2Type">Moving Average 2 (Long) Type:</label>
                                <select id="ma2Type" name="ma2Type">
                                <option value="simple">Simple</option>
                                <option value="exponential">Exponential</option>
                                </select>
                            </div>

                            {/* Take Profit Threshold  */}
                            <div class="inputField">
                                <label for="takeProfit">Take Profit Threshold:</label>
                                <input type="number" id="takeProfit" name="takeProfit" placeholder="Enter profit threshold" />
                            </div>

                            {/* Allow Re-entries  */}
                            <div class="inputField">
                                <label>Allow Re-entries:</label>
                                <input type="radio" id="reentryYes" name="allowReentries" value="yes" />
                                <label for="reentryYes">Yes</label>
                                <input type="radio" id="reentryNo" name="allowReentries" value="no" />
                                <label for="reentryNo">No</label>
                            </div>

                            {/* Submit Button  */}
                            <button type="submit">Run Backtest</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalysisIntroForm;