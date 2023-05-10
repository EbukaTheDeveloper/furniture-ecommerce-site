import { useRef, useState, useEffect } from 'react';
import HeaderComponent from './component/header';
import NewsletterComponent from './component/newsletter';
import Footer from './component/footer';
import { Route, Routes } from "react-router-dom";
import ShoppingBagList from './component/shoppingBagLists';
import SearchSection from './component/product-search-section';
import HomePage from './component/homepage-section/HomePage';
import AboutPage from './component/other-pages/about';
import ContactPage from './component/other-pages/contact';
import FaqPage from './component/other-pages/faq';
import ProductsLinkPage from './component/products-section/products-link-page';
import AllProduct from './component/products-section/all-product';
import SofaProducts from './component/products-section/sofa-products';
import ChairProducts from './component/products-section/chair-products';
import TableProduct from './component/products-section/table-product';
import './css/productPage.css';


function App() {
  const [visible, setVisible] = useState([false, false]);
  function toggleVisibility(index) {
    const isVisible = [...visible];
    isVisible[index] = !isVisible[index];
    setVisible(isVisible);
  }

  return (
    <div className="App">
      <div className="zinc-white">
        <HeaderComponent handleClick1={toggleVisibility.bind('this', 0)} handleClick2={toggleVisibility.bind('this', 1)} />
        <SearchSection myClass={`search-section ${visible[0] ? 'visible' : ''}`} handleClick={toggleVisibility.bind('this', 0)} />
        <ShoppingBagList ariaHidden={!visible} myClass={`overlay ${visible[1] ? 'visible' : ''}`} handleClick={toggleVisibility.bind('this', 1)} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="products" element={<ProductsLinkPage />} >
            <Route index element={<AllProduct />} />
            <Route path="sofa" element={<SofaProducts />} />
            <Route path="chair" element={<ChairProducts />} />
            <Route path="table" element={<TableProduct />} />
          </Route>
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
