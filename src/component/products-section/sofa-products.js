import productList from "./product-list"
import ProductsItem from "./products-item";

export default function SofaProducts() {
    const sofaList = productList.filter(item => item.productType === 'sofa');
    return (
        <article className="products-wrapper">
            {sofaList.map((item, index) => {
                return (<ProductsItem key={index} src={item.src} srcset={item.srcset} productName={item.productName} width={item.width} height={item.height} price={item.price} alt={item.productName} myClass={'sofa-products'} myImgClass={item.className} />)
            })}
        </article>
    )
}