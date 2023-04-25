import { useRef } from "react";
import "../../css/faqPage.css";

export default function FaqPage() {
    const answerRef1 = useRef(null);
    const answerRef2 = useRef(null);
    const answerRef3 = useRef(null);
    const answerRef4 = useRef(null);
    const answerRef5 = useRef(null);
    const answerRef6 = useRef(null);
    const answerRef7 = useRef(null);
    const answerRef8 = useRef(null);
    const openBtnRef1 = useRef(null);
    const openBtnRef2 = useRef(null);
    const openBtnRef3 = useRef(null);
    const openBtnRef4 = useRef(null);
    const openBtnRef5 = useRef(null);
    const openBtnRef6 = useRef(null);
    const openBtnRef7 = useRef(null);
    const openBtnRef8 = useRef(null);
    const closeBtnRef1 = useRef(null);
    const closeBtnRef2 = useRef(null);
    const closeBtnRef3 = useRef(null);
    const closeBtnRef4 = useRef(null);
    const closeBtnRef5 = useRef(null);
    const closeBtnRef6 = useRef(null);
    const closeBtnRef7 = useRef(null);
    const closeBtnRef8 = useRef(null);
    function showAnswer(myRef1, myRef2, myRef3) {
        myRef1.current.style.display = 'none';
        myRef2.current.style.display = 'block';
        myRef3.current.style.display = 'block';
    }
    function hideAnswer(myRef1, myRef2, myRef3) {
        myRef1.current.style.display = 'block';
        myRef2.current.style.display = 'none';
        myRef3.current.style.display = 'none';
    }
    return (
        <article className="faq-page">
            <h1>Frequently Asked Questions</h1>
            <article>
                <div className="question-container">
                    <h2>What types of furniture do we sell?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef1, closeBtnRef1, answerRef1)} ref={openBtnRef1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef1} onClick={hideAnswer.bind('this', openBtnRef1, closeBtnRef1, answerRef1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef1}>
                    <p>
                        We sell a wide variety of furniture including sofas, chairs, tables, beds, cabinets, and more. Our selection includes furniture for living rooms, bedrooms, dining rooms, and home offices.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2> Do we offer free delivery?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef2, closeBtnRef2, answerRef2)} ref={openBtnRef2}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef2} onClick={hideAnswer.bind('this', openBtnRef2, closeBtnRef2, answerRef2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef2}>
                    <p>
                        Yes, we offer free delivery on orders over a certain amount. The minimum order amount varies depending on your location. Please check our delivery information page for more details.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Can I track my order?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef3, closeBtnRef3, answerRef3)} ref={openBtnRef3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef3} onClick={hideAnswer.bind('this', openBtnRef3, closeBtnRef3, answerRef3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef3}>
                    <p>
                        Yes, you can track your order through our website. Once your order has been shipped, we will send you a tracking number so you can follow your delivery.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>What is your return policy?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef4, closeBtnRef4, answerRef4)} ref={openBtnRef4}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef4} onClick={hideAnswer.bind('this', openBtnRef4, closeBtnRef4, answerRef4)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef4}>
                    <p>
                        We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please see our return policy page for more details.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Do you offer financing options?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef5, closeBtnRef5, answerRef5)} ref={openBtnRef5}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef5} onClick={hideAnswer.bind('this', openBtnRef5, closeBtnRef5, answerRef5)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef5}>
                    <p> Yes, we offer financing options through our partner companies. Please check our financing page for more details.</p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Do you offer assembly services?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef6, closeBtnRef6, answerRef6)} ref={openBtnRef6}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef6} onClick={hideAnswer.bind('this', openBtnRef6, closeBtnRef6, answerRef6)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef6}>
                    <p>
                        Yes, we offer assembly services for select products. Please check the product description or contact our customer service team for more information.
                    </p>
                </div>
            </article>
            <article>
                <div className="question-container">
                    <h2>Can I change my order after it has been placed?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef7, closeBtnRef7, answerRef7)} ref={openBtnRef7}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef7} onClick={hideAnswer.bind('this', openBtnRef7, closeBtnRef7, answerRef7)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef7}>
                    <p>
                        We will do our best to accommodate any changes to your order. Please contact our customer service team as soon as possible to request changes.
                    </p>
                </div>
            </article>
            <article className="last-faq">
                <div className="question-container">
                    <h2>How can I contact your customer service team?</h2>
                    <button onClick={showAnswer.bind('this', openBtnRef8, closeBtnRef8, answerRef8)} ref={openBtnRef8}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                    </button>
                    <button className="close-reply-btn" ref={closeBtnRef8} onClick={hideAnswer.bind('this', openBtnRef8, closeBtnRef8, answerRef8)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <div className="answer-wrapper" ref={answerRef8}>
                    <p>
                        You can contact our customer service team by email, phone, or live chat. Our customer service hours are Monday through Friday from 9 am to 5 pm EST. Please visit our contact us page for more details.
                    </p>
                </div>
            </article>
        </article>
    )
}