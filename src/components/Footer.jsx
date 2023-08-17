import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="footer-top section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">

                        <div className="single-footer about">
                            <div className="logo">
                                <a href="#">{this.props.info.shopName}</a>
                            </div>
                            <p className="text">{this.props.footerInfos.description}</p>
                            <p className="call">Sorun mu var ? Bizimle bu numaradan iletişime geçebilirsin <span><a href={this.props.info.phoneNumber}>{this.props.info.phoneNumber}</a></span></p>
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-6 col-12">

                        <div className="single-footer links">
                            <h4>Bilgilerimiz</h4>
                            <ul>
                                <li><a href="#aboutus">Hakkımızda</a></li>
                                <li><a href="#contactus">Bizimle iletişim kur</a></li>
                            </ul>
                        </div>

                    </div>
                   
                    
                </div>
            </div>
        </div>

        <div className="copyright">
            <div className="container">
                <div className="inner">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="left">
                                <p>Copyright © 2023 <a href="https://github.com/cemtekinn" target="_blank">Cem TEKİN</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}
export default Footer;