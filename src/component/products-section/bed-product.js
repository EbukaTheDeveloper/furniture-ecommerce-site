import ProductsItem from "./products-item";
import productList from "./product-list";
//import '../../css/productPage.css';

export default function Bed_Product() {
    const bedList = productList.filter(item => item.productType === 'bed')
    return (
        <article className="products-wrapper">
            {bedList.map((item, index) => {
                return (<ProductsItem key={index} src={item.src} srcset={item.srcset} productName={item.productName} width={item.width} height={item.height} price={item.price} alt={item.productName} myClass={'bed-products'} myImgClass={item.className} />)
            })}
        </article>
    )
}