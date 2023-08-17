import axios from 'axios';
import React,{Component} from 'react';

class ProductDetail extends Component {
  state = {
    product: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { productId } = 5; // Ürün ID'si React Router'dan alınır.
    
    axios.get(`http://localhost:8080/api/products/getbyid?id=${productId}`)
      .then(response => {
        this.setState({
          product: response.data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false,
        });
      });
  }

  render() {
    const { product, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>There was an error loading the product.</div>;
    }

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
                </div>
                <div className="modal-body">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                            <div className="product-gallery">
                                <div className="quickview-slider-active">
                                    <div className="single-slider">
                                        <img src="https://via.placeholder.com/569x528" alt="#" />
                                    </div>
                                    <div className="single-slider">
                                        <img src="https://via.placeholder.com/569x528" alt="#" />
                                    </div>
                                    <div className="single-slider">
                                        <img src="https://via.placeholder.com/569x528" alt="#" />
                                    </div>
                                    <div className="single-slider">
                                        <img src="https://via.placeholder.com/569x528" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="quickview-content">
                                <h2>{product.productName}</h2>
                                <div className="quickview-ratting-review">
                                    <div className="quickview-ratting-wrap">
                                        <div className="quickview-ratting">
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <a href="#"> (1 customer review)</a>
                                    </div>
                                    <div className="quickview-stock">
                                        <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                    </div>
                                </div>
                                <h3>$29.00</h3>
                                <div className="quickview-peragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                                </div>
                                <div className="size">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h5 className="title">Size</h5>
                                            <select>
                                                <option selected="selected">s</option>
                                                <option>m</option>
                                                <option>l</option>
                                                <option>xl</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <h5 className="title">Color</h5>
                                            <select>
                                                <option selected="selected">orange</option>
                                                <option>purple</option>
                                                <option>black</option>
                                                <option>pink</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity">

                                    <div className="input-group">
                                        <div className="button minus">
                                            <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                <i className="ti-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" name="quant[1]" className="input-number" data-min="1" data-max="1000" value="1" />
                                        <div className="button plus">
                                            <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                <i className="ti-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="add-to-cart">
                                    <a href="#" className="btn">Add to cart</a>
                                    <a href="#" className="btn min"><i className="ti-heart"></i></a>
                                    <a href="#" className="btn min"><i className="fa fa-compress"></i></a>
                                </div>
                                <div className="default-social">
                                    <h4 className="share-now">Share:</h4>
                                    <ul>
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="youtube" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        <li><a className="dribbble" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
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
}

export default ProductDetail;