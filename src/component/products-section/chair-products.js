import productList from "./product-list"
import ProductsItem from "./products-item";

export default function ChairProducts() {
    const chairList = productList.filter(item => item.productType === 'chair');
    return (
        <article className='products-wrapper'>
            {chairList.map((item, index) => {
                return (<ProductsItem key={index} src={item.src} srcset={item.srcset} productName={item.productName} width={item.width} height={item.height} price={item.price} alt={item.productName} myClass={'chair-products'} myImgClass={item.className} />)
            })}
        </article>
    )
}