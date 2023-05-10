import { useState } from "react"
export default function NewsletterComponent() {
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    function handleClick(e) {
        e.preventDefault();
        setInputValue('');
    }
    return (
        <article className="newsletter-section">
            <div>
                <h2 className="newsletter-title">Signup to receive updates about new products</h2>
                <div>
                    <form className='newsletter-form'>
                        <div>
                            <input type="email" id="mail" placeholder="Your Email" value={inputValue} name="_email" aria-label="Email" onChange={handleInputChange} />
                            <button type="submit" onClick={handleClick}>
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="newsletter-img">
                <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto/v1681475386/0ed498e649e588a2274e83745e644d44_xdnj96.jpg"
                    loading="lazy" width="444" height="380"
                />
            </div>
        </article>
    )
}