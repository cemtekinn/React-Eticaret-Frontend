import React, { Component } from 'react'

class SmallBanner extends Component {
  render() {
    return (
        <section className="small-banner section">
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-banner">
                        <img width={600} height={370} src={this.props.products.image1}  alt="#" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-banner">
                        <img width={600} height={370} src={this.props.products.image2}  alt="#" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-banner tab-height">
                        <img width={600} height={370} src={this.props.products.image3} alt="#" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
}
export default SmallBanner;