import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
        <section className="shop-services section home">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">

                    <div className="single-service">
                        <i className="ti-rocket"></i>
                        <h4>Ücretsiz Kargo</h4>
                        <p>300 TL ve üzeri siparişlerinize ücretsiz kargo</p>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                    <div className="single-service">
                        <i className="ti-reload"></i>
                        <h4>Kolay İade</h4>
                        <p>14 gün içerisinde herhangi bir sorunla karşılaşmanız durumunda kolay iade seçeneği</p>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                    <div className="single-service">
                        <i className="ti-lock"></i>
                        <h4>Güvenli Ödeme</h4>
                        <p>En populer ve en güvenli ödeme seçeneği ile kolayca ödeme yapabilirsiniz</p>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                    <div className="single-service">
                        <i className="ti-tag"></i>
                        <h4>En kısa sürede kargo</h4>
                        <p>Sipariş verdikten sonra en kısa süre içerisinde kargoya veriyoruz </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
  }
}
export default  Services;