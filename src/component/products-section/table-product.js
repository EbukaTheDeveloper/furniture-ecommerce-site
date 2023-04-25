import productList from "./product-list"
import ProductsItem from "./products-item";

export default function TableProduct() {
    const tableList = productList.filter(item => item.productType === 'table');
    return (
        <article className='products-wrapper'>
            {tableList.map((item, index) => {
                return (<ProductsItem key={index} src={item.src} srcset={item.srcset} productName={item.productName} width={item.width} height={item.height} price={item.price} alt={item.productName} myClass={'table-products'} myImgClass={item.className} />)
            })}
        </article>
    )
}