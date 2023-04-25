import { Link } from "react-router-dom"
export default function BrowseCollectionComponent() {
  return (
    <article className="collections">
      <div className="collection_1">
        <div>
          <p className="collection_1_title">Residential furniture</p>
          <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/e_bgremoval,f_auto,q_auto,w_1280/v1681228541/d8197a7bd3aa6f88ebed0a34b1c13eeb_wn7rjb.jpg"
            width="351" height="216" loading="lazy" alt="ES8 wooden Box Stool"
          />
        </div>
        <Link to="/products" className="collection_link">
          <span>Browse Collection </span>
        </Link>
      </div>
      <div className="collection_2">
        <div>
          <p className="collection_2_title">Hospitality furniture</p>
          <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/a_hflip,e_bgremoval,f_auto,q_auto,w_1280/v1681228619/2198a3071f70812d824ecc08cc6e022c_fodokc.jpg"
            width="300" height="216" loading="lazy" alt="ES8 Hospitality Furniture"
          />
        </div>
        <Link to="/products" className="collection_link">
          <span>Browse Collection </span>
        </Link>
      </div>
    </article>
  )
}