import { useRef, useState } from "react";
import "../../css/faqPage.css";

export default function FaqPage() {
    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
    const toggleVisibility = (index) => {
        const visibility = [...isVisible];
        visibility[index] = !visibility[index];
        setIsVisible(visibility)
    };
    return (
        <article className="faq-page">
            <h1>Frequently Asked Questions</h1>
            <article>
                <div className="question-container">
                    <h2>What types of furniture do we sell?</h2>
                    <button onClick={toggleVisibility.bind('this', 0)} className={`open-faq ${isVisible[0] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[0] ? 'visible' : ''}`}>
                    <p>
                        We sell a wide variety of furniture including sofas, chairs, tables, beds, cabinets, and more. Our selection includes furniture for living rooms, bedrooms, dining rooms, and home offices.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2> Do we offer free delivery?</h2>
                    <button onClick={toggleVisibility.bind('this', 1)} className={`open-faq ${isVisible[1] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[1] ? 'visible' : ''}`}>
                    <p>
                        Yes, we offer free delivery on orders over a certain amount. The minimum order amount varies depending on your location. Please check our delivery information page for more details.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Can I track my order?</h2>
                    <button onClick={toggleVisibility.bind('this', 2)} className={`open-faq ${isVisible[2] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[2] ? 'visible' : ''}`}>
                    <p>
                        Yes, you can track your order through our website. Once your order has been shipped, we will send you a tracking number so you can follow your delivery.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>What is your return policy?</h2>
                    <button onClick={toggleVisibility.bind('this', 3)} className={`open-faq ${isVisible[3] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[3] ? 'visible' : ''}`}>
                    <p>
                        We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please see our return policy page for more details.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Do you offer financing options?</h2>
                    <button onClick={toggleVisibility.bind('this', 4)} className={`open-faq ${isVisible[4] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[4] ? 'visible' : ''}`}>
                    <p> Yes, we offer financing options through our partner companies. Please check our financing page for more details.</p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Do you offer assembly services?</h2>
                    <button onClick={toggleVisibility.bind('this', 5)} className={`open-faq ${isVisible[5] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[5] ? 'visible' : ''}`}>
                    <p>
                        Yes, we offer assembly services for select products. Please check the product description or contact our customer service team for more information.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Can I change my order after it has been placed?</h2>
                    <button onClick={toggleVisibility.bind('this', 6)} className={`open-faq ${isVisible[6] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[6] ? 'visible' : ''}`}>
                    <p>
                        We will do our best to accommodate any changes to your order. Please contact our customer service team as soon as possible to request changes.
                    </p>
                </div>
            </article>
            <article className="last-faq">
                <div className="question-container">
                    <h2>How can I contact your customer service team?</h2>
                    <button onClick={toggleVisibility.bind('this', 7)} className={`open-faq ${isVisible[7] ? 'animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                </div>
                <div className={`answer-wrapper ${isVisible[7] ? 'visible' : ''}`}>
                    <p>
                        You can contact our customer service team by email, phone, or live chat. Our customer service hours are Monday through Friday from 9 am to 5 pm EST. Please visit our contact us page for more details.
                    </p>
                </div>
            </article>
        </article>
    )
}