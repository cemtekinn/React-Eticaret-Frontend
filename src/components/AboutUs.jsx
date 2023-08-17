import React, { Component } from 'react'

class MiniBlog extends Component {
    render() {
        return (
            <section className="shop-blog section" id="aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Biz kimiz ?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="shop-single-blog">
                                <img src={this.props.about.image1} alt="#" />
                                <div className="content">
                                    <p className="date">{this.props.about.subject1}</p>
                                    <a href="#" className="title">{this.props.about.title1}</a>
                                    <a href="#" className="more-btn">{this.props.about.description1}</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="shop-single-blog">
                                <img  src={this.props.about.image2} alt="#" />
                                <div className="content">
                                    <p className="date">{this.props.about.subject2}</p>
                                    <a href="#" className="title">{this.props.about.title2}</a>
                                    <a href="#" className="more-btn">{this.props.about.description2}</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="shop-single-blog">
                                <img  src={this.props.about.image3} alt="#" />
                                <div className="content">
                                    <p className="date">{this.props.about.subject3}</p>
                                    <a href="#" className="title">{this.props.about.title3}</a>
                                    <a href="#" className="more-btn">{this.props.about.description3}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default MiniBlog;