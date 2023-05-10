
import { Link, Outlet } from "react-router-dom";

export default function ProductsLinkPage() {
    const styles = {
        paddingTop: '1rem',
        fontSize: '0.9rem'
    }
    return (
        <article className="Products-link-wrapper" style={styles}>
            <div>
                <nav>
                    <ul className="product-links-wrapper">
                        <li><Link to="/products" className="all-products-link products-link">All</Link></li>
                        <li><Link to="/products/sofa" className="sofa-products-link products-link">Sofa</Link></li>
                        <li><Link to="/products/table" className="table-products-link products-link">Table</Link></li>
                        <li><Link to="/products/chair" className="chair-products-link products-link">Chair</Link></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </article>
    )
}