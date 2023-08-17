import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div className="middle-inner">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                   
                    <div className="logo">
                        <a href="#">{this.props.info.shopName} </a>
                    </div>
                  
                    <div className="search-top">
                        <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                      
                        <div className="search-top">
                            <form className="search-form">
                                <input type="text" placeholder="Ara..." name="search" />
                                <button value="search" type="button"><i className="ti-search"></i></button>
                            </form>
                        </div>
                       
                    </div>
                 
                    <div className="mobile-nav"></div>
                </div>

                <div className="col-lg-8 col-md-7 col-12">
                    <div className="search-bar-top">
                        <div className="search-bar">
                            
                            <form>
                                <input name="search" placeholder="Ürün ara....." type="search" />
                                <button className="btnn"><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

                
                <div className="col-lg-2 col-md-3 col-12">
                    <div className="right-bar">
                       
                        <div className="sinlge-bar">
                            <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                        </div>
                        <div className="sinlge-bar">
                            <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                        </div>
                        <div className="sinlge-bar shopping">
                            <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{this.props.cartInfos.productCount} </span></a>
                          
                            <div className="shopping-item">
                                <div className="dropdown-cart-header">
                                    <span>Sepetinizdeki Ürünler</span>
                                </div>
                                <ul className="shopping-list">
<noscript>Sepette listelenecek ürünler </noscript>

                                    <li>
                                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                        <a className="cart-img" href="#"><img src={this.props.cartInfos.image} alt={this.props.cartInfos.productName} /></a>
                                        <h4><a href="#">{this.props.cartInfos.productName}</a></h4>
                                        <p className="quantity">Adet:{this.props.cartInfos.quantity} - Fiyat: <span className="amount">{this.props.cartInfos.unitPrice} TL</span></p>
                                    </li>

                                </ul>
                                <div className="bottom">
                                    <div className="total">
                                        <span>Toplam</span>
                                        <span className="total-amount">{this.props.cartInfos.quantity * this.props.cartInfos.unitPrice} TL</span>
                                    </div>
                                    <a href="#" className="btn animate">Ödemeyi Tamamla</a>
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
export default Header;