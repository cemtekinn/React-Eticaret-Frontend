import React, { Component } from 'react'

 class Slider extends Component {
  render() {
    return (
        <section className="hero-slider">
            <div className="single-slider">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-9 offset-lg-3 col-12">
                            <div className="text-inner">
                                <div className="row">
                                    <div className="col-lg-7 col-12">
                                        <div className="hero-text">
                                            <h1><span> Seçili ürünlerde %{this.props.info.discount} indirim </span>{this.props.info.productName}</h1>
                                            <p>{this.props.info.description}</p>
                                            <div className="button">
                                                <a href="#" className="btn">Şimdi alışveriş yap!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
export default Slider;