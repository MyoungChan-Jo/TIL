import React from 'react';
import './index.css'
import axios from "axios";


function MainPage() {
    const [products, setProducts]= React.useState([]);

    React.useEffect(
        function(){
            axios
            .get("https://b6c9f9db-6336-4fa5-8869-812394213876.mock.pstmn.io/products")
            .then(function(result){
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function(error){
                console.error('에러발생 : ', error);
            })
        },[])


    return (
        <div>
        <div id="header">
            <div id="header-area">
                <img src="images/icons/logo.png" alt="#"/>
            </div>
        </div>
        <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" alt="#" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {products.map(function(product, index){
                return (
                    <div className="product-card">
                    <div>
                        <img
                            className="product-img"
                            src={product.imageUrl}/>
                    </div>
                    <div className="product-contents">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">{product.price}원</span>
                        <div className="product-seller">
                            <img className="product-avatar" src="images/icons/avatar.png"></img>
                            <span>{product.seller}</span>
                        </div>
                    </div>
                    
                </div>
                        )
                    })
                }
                
            </div>
        </div>
        <div id="footer"></div>
        </div>
    );
}

export default MainPage;