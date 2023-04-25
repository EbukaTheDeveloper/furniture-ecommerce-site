import productList from "./product-list"
import ProductsItem from "./products-item";

export default function AllProduct() {
    return (
        <article className='products-wrapper'>
            {productList.map((item, index) => {
                return (<ProductsItem key={index} src={item.src} srcset={item.srcset} productName={item.productName} width={item.width} height={item.height} price={item.price} alt={item.productName} myClass={'all-products'} myImgClass={item.className} />);
            })}
        </article>
    )
}