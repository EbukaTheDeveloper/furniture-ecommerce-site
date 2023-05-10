export default function ProductsItem({ productName, price, imgSrc, srcset, width, height, alt, myClass, myImgClass, handleClick }) {
    return (
        <article className={myClass}>
            <div>
                <div className="add-to-cart">
                    <button onClick={handleClick}>Add to Bag</button>
                </div>
                <span className="product-name">{productName}</span>
                <span className="product-price">{price}</span>
            </div>
            <div className="product-img-container">
                <img src={imgSrc} srcSet={srcset} width={width} height={height} alt={alt} loading="lazy" className={myImgClass} />
            </div>
        </article>
    )
}