import { Link } from "react-router-dom";
import '../css/shopping-bag-lists.css';

export default function ShoppingBagList({ myRef, handleClick }) {
    const lists = 0;
    return (
        <div className="overlay" ref={myRef}>
            <div className="modal">
                <div className="close-menu_wrapper">
                    <button className="close-menu-btn" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </button>
                </div>
                <h1>Your Shopping Bag</h1>
                {lists === 0 ? (
                    <div className="on-empty">
                        <div>
                            <span>Your shopping bag is empty</span>
                            <div className="svg_wrapper">
                                <svg class="shopping_bag_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path></svg>
                            </div>
                        </div>
                        <Link to="/products" onClick={handleClick}>
                            <div>Browse Products</div>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    )
}