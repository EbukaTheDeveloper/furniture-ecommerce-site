import { Link } from "react-router-dom"
export default function WelcomeSection() {
  return (
    <div>
      <div>
        <h1 className="heading-text">Modern Furniture For Modern Living Style</h1>
      </div>
      <div className="hero-section">
        <div>
          <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_1280/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg"
            srcSet="https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_256/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg 256w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_512/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg 512w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_768/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg 768w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_1024/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg 1024w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_1280/v1681220959/547480391d2c28f5f13a091eb18e2548_asghpn.jpg 1280w"
            width="1033" height="1185"
            alt="ES8 furniture Chair"
            className="hero-img"
          />
        </div>
        <p className="welcome-text">
          Welcome to our online furniture store! We offer a wide selection of high-quality furniture pieces to enhance the look and feel of your home.
          From cozy armchairs to elegant dining tables, we have everything you need to create a comfortable and stylish living space.
          Our furniture is crafted from the finest materials to ensure durability and longevity.
        </p>
      </div>
      <div className="shop-now-section">
        <Link to="/products" className="shop-now">
          <span>Shop Now</span>
        </Link>
      </div>
    </div>
  )
}