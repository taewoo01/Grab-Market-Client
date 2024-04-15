import React from 'react';
import './index.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Mainpage() {
    const [products, setproducts] = React.useState([]);
    React.useEffect(
        function(){
            axios.get("https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products")
            .then(function(result){
                const products = result.data.products;
                console.log(products)
                setproducts(products);
            }).catch(function(error){
                console.log("에러 : ", error);
            });
    }, []);

    return (
    <div>
        <div id="header">
            <div id="header-area">
                <img src="./images/images/icons/logo.png" alt="logo" />
            </div>
        </div>
        <div id="body">
            <div id="banner">
                <img src="./images/images/banners/banner1.png" alt="banner" />
            </div>
            <h1>판매되는 상품들</h1>
               <div id="product-list">
                {products.map(function(product, index){
                    return (
                        <div className='product-card'>
                            <Link className="product-link" to={'/products/' + index}>
                                <div>
                                     <img className='product-img' alt='product' src={`images/${product.imageUrl}`} />
                                </div>
                                <div className='product-contents'>
                                    <span className='product-name'>
                                        {product.name}
                                    </span>
                                    <span className='product-price'>
                                        {product.price}원
                                    </span>
                                </div>
                                <div className='pronduct-seller'>
                                    <img className='product-avatar' alt='avatar' src='./images/images/icons/avatar.png' />
                                    <span>{product.seller}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })};
            </div>
        </div>
        <div id="footer"></div>
    </div>
    );
}

export default Mainpage;