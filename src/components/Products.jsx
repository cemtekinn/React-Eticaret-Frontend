import React, { Component,useState,useEffect } from 'react'
import axios from 'axios';

function ProductList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/categories/getall")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (selectedCategoryId) {
            axios.get(`http://localhost:8080/api/products/getbycategoryid?categoryId=${selectedCategoryId}`)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios.get("http://localhost:8080/api/products/getall")
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [selectedCategoryId]);

    return (
        <div className="product-area section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Ürünlerimiz</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="product-info">
                            <div className="nav-main">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a 
                                            className="nav-link" 
                                            data-toggle="tab"
                                            href="#products"
                                            onClick={() => setSelectedCategoryId(null)}
                                            role="tab">
                                            
                                            Tüm Ürünler
                                        </a>
                                        </li>

                                    {categories.map((category) => (
                                        <li key={category.categoryId} className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-toggle="tab"
                                                onClick={() => setSelectedCategoryId(category.categoryId)}
                                                href={`#${category.categoryId}`}
                                                role="tab"
                                            >
                                                {category.categoryName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tab-content" id="getall">

                                <div className="tab-pane fade show active" id="products" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="row">
                                                {products.map((product) => (
                                                    <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={product.id}>
                                                        <div className="single-product">
                                                            <div className="product-img">
                                                                <a href="#">
                                                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                </a>
                                                                <div className="button-head">
                                                                    <div className="product-action">
                                                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Ürün Detayı</span></a>
                                                                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>İstek Listesine Ekle</span></a>
                                                                    </div>
                                                                    <div className="product-action-2">
                                                                        <a title="Add to cart" href="#">Sepete Ekle</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h7 style={{ color: "grey" }}><a>{product.category.categoryName}</a></h7>
                                                                <h6><a href="#">{product.productName}</a></h6>
                                                                <div className="product-price">
                                                                    <span>{product.unitPrice} TL</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default ProductList;
