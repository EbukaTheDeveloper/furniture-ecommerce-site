import "../../css/contactPage.css";

export default function ContactPage() {
    return (
        <article className="contact-page">
            <div>
                <h1 className="contact-heading">Contact Us</h1>
                <p>if you have any questions, reach out through email <b>support@es8shop.com</b></p>
                <p>We will provide you with a fast response as soon as possible</p>
            </div>
            <div>
                <h2>Suggestions?</h2>
                <p>We love to hear your feedback. please let us know how we can improve.</p>
            </div>
            <div>
                <h2>Chat with us</h2>
                <span>7 days a week, 8:00 AM - 10:00 PM EST</span>
                <span>Call us (855) 252-3775:</span>
                <span>Monday - Friday, 9:00 AM - 5:00 PM EST.</span>
                <span>Thank you for shopping with The ES8 Shop!</span>
            </div>
        </article>
    )
}