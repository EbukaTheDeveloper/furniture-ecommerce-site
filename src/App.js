import { useRef } from 'react';
import HeaderComponent from './component/header';
import NewsletterComponent from './component/newsletter';
import Footer from './component/footer';
import { Route, Routes, Navigate } from "react-router-dom";
import ShoppingBagList from './component/shoppingBagLists';
import HomePage from './component/homepage-section/HomePage';
import AboutPage from './component/other-pages/about';
import ContactPage from './component/other-pages/contact';
import FaqPage from './component/other-pages/faq';
import ProductsLinkPage from './component/products-section/products-link-page';
import AllProduct from './component/products-section/all-product';
// import Bed_Product from './component/products/bed-product';
import SofaProducts from './component/products-section/sofa-products';
import ChairProducts from './component/products-section/chair-products';
import TableProduct from './component/products-section/table-product';
import './css/productPage.css';
function App() {
  const shoppingBagRef = useRef('null');
  function displayShoppingBag() {
    shoppingBagRef.current.style.display = 'block';
  }
  function hideShoppingBag() {
    shoppingBagRef.current.style.display = 'none';
  }
  return (
    <div className="App">
      <div className="zinc-white">
        <HeaderComponent handleClick={displayShoppingBag} />
        <ShoppingBagList myRef={shoppingBagRef} handleClick={hideShoppingBag} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="products" element={<ProductsLinkPage />} >
            <Route index element={<AllProduct />} />
            {/* <Route path="bed" element={<Bed_Product />} /> */}
            <Route path="sofa" element={<SofaProducts />} />
            <Route path="chair" element={<ChairProducts />} />
            <Route path="table" element={<TableProduct />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="page-footer">
        <NewsletterComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
