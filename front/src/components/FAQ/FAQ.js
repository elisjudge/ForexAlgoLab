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
        <section>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">

                    <button className="accordion" onClick={() => toggleFAQ(0)}>
                        What is a Moving Average Cross-Over Strategy?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 0 ? 'block' : 'none' }}>
                        <p>Explanation of Moving Average Cross-Over Strategy...</p>
                    </div>

                    <button className="accordion" onClick={() => toggleFAQ(1)}>
                        How do I choose the right moving average periods for my strategy?
                    </button>
                    <div className="panel" style={{ display: openFAQ === 1 ? 'block' : 'none' }}>
                        <p>Guidance on choosing moving average periods...</p>
                    </div>
                    {/* More FAQs... */}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
