import React, { Component } from 'react'

class NewArrivals extends Component {
  render() {
    return (
        <div className="product-area most-popular section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Yeni Gelenler</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="owl-carousel popular-slider">

                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="#">Black Sunglass For Women</a></h3>
                                <div className="product-price">
                                    <span className="old">$60.00</span>
                                    <span>$50.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="#">Women Hot Collection</a></h3>
                                <div className="product-price">
                                    <span>$50.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="#">Awesome Pink Show</a></h3>
                                <div className="product-price">
                                    <span>$50.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="#">Awesome Bags Collection</a></h3>
                                <div className="product-price">
                                    <span>$50.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default NewArrivals;