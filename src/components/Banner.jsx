import React, { Component } from 'react'
import Register from './Register'
import LoginModalPage from './LoginModalPage'
class Banner extends Component {
    render() {
        return (
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><i className="ti-headphone-alt"></i>{this.props.info.phoneNumber}</li>
                                    <li><i className="ti-email"></i>{this.props.info.email}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="right-content">
                                <ul className="list-main">
                                    <li>
                                    <a data-toggle="modal" data-target="#registermodal" href="#"><i className="ti-user"></i><span>Kayıt Ol</span></a>
                                    </li>
                                    <Register/>
                                    <li><img src="../../assets/images/icons/login.png" width={20} height={20} ></img> <a data-toggle="modal" data-target="#loginModal" href="#">Giriş Yap</a></li>
                                    <LoginModalPage/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Banner;