import '../css/search-section.css';
import { Link } from 'react-router-dom';

import { useState, useRef } from 'react';
import productList from './products-section/product-list';

export default function SearchSection({ myClass, handleClick, handleOverlayClick }) {
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(e) {
        const target = e.target.value;
        setInputValue(target.toLowerCase());
    }
    const lists = productList.filter(list => list.searchName.includes(inputValue));
    return (
        <article className={myClass} onClick={handleOverlayClick}>
            <div className='search-bar_modal'>
                <section className='search-form-wrapper'>
                    <form className="search-product-form">
                        <div className="search-inputs-wrapper">
                            <input aria-label="search" type="text" placeholder="What are you looking for" className="search-input" name="search_text" value={inputValue} onChange={handleInputChange} />
                            <button type="button" className="search-product-btn" aria-label='search products'>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z" /></svg>
                            </button>
                        </div>
                        <div>
                            <button className="cancel-search" type="button" aria-label="cancel search" onClick={handleClick}>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                            </button>
                        </div>
                    </form>
                </section>
                <section className="collections_wrapper">
                    <h2>Recommended Collections</h2>
                    <ul>
                        <li>
                            <Link to="/products/sofa" onClick={handleClick}>Sofa</Link>
                        </li>
                        <li>
                            <Link to="/products/table" onClick={handleClick}>Table</Link>
                        </li>
                        <li>
                            <Link to="/products/chair" onClick={handleClick}>Chair</Link>
                        </li>
                    </ul>
                </section>
                <article className='result_section'>
                    {inputValue === '' ? null : <div>
                        <h2 className='result_count'>{lists.length} result</h2>
                        <div>
                            {lists.map((item, index) => {
                                return (<div key={index} className='result_link_wrapper'>
                                    <Link to={item.href} className='result_link' onClick={handleClick}>
                                        {item.productName}
                                    </Link>
                                </div>);
                            })}
                        </div>
                    </div>}
                </article>
            </div>
        </article>
    )
}