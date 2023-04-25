import "../../css/aboutPage.css";

export default function AboutPage() {
    return (
        <article className="about-us-page">
            <div>
                <h1 className="about-heading">ABOUT US</h1>
                <div className="about-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="sofa-icon"><path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15M20 10C18.9 10 18 10.9 18 12V15H6V12C6 10.9 5.11 10 4 10S2 10.9 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" /></svg>
                </div>
                <p>Modern Furniture For Modern Living Style</p>
            </div>
            <div className="about-us-message">
                <div>
                    <p>
                        Welcome to our online furniture store, where we bring style and comfort to your doorstep. We are a team of passionate furniture experts committed to providing the best furniture shopping experience for our customers.
                    </p>
                    <p>At our store, we have carefully selected a wide range of furniture pieces that cater to different styles and preferences. Whether you are looking for modern, contemporary, traditional, or rustic furniture, we have it all. Our furniture collections include sofas, chairs, tables, beds, dressers, and much more.</p>
                    <p>We believe that high-quality furniture should be affordable for everyone, which is why we offer our products at competitive prices. We also offer regular promotions and discounts to make sure that our customers get the best value for their money.</p>
                    <p>Thank you for choosing our online furniture store. We look forward to serving you and helping you create a stylish and comfortable home.</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/f_auto,q_auto,w_800/v1681747851/daniil-silantev-1P6AnKDw6S8-unsplash_xtv58g.jpg"
                        width="1000" height="1000" loading="lazy" alt=""
                    />
                </div>
            </div>
        </article>
    )
}