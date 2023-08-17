import React, { Component, useState, useEffect } from 'react'
import Banner from './components/Banner';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import SmallBanner from './components/SmallBanner';
import MiddleBanner from './components/MiddleBanner';
import NewArrivals from './components/NewArrivals';
import BestSellerProduct from './components/BestSellerProducts';
import Services from './components/Services';
import ImageAndText from './components/ImageAndText';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import AboutUs from './components/AboutUs';
import LoadAnimation from './components/LoadAnimation';
import Register from './components/Register';

import Products from './components/Products';

function App() {

    let shopInfos = { email: "deneme@gmail.com", phoneNumber: "+90 0551 123 45 54", shopName: "E-Market" };
    let footerInfos = { description: "Mağaza hakkında genel açıklamalar" }
    let cartInfos = { productCount: "1", productName: "Bilgisayar", quantity: "3", unitPrice: "5000", image: "../assets/images/products/laptop.jpg" };
    let sliderInfos = { productName: "Akıllı Telefon", description: "Akıllı telefonlarda kaçırılamayacak fırsatlar", discount: "25" }
    let aboutUsInfos = {
        image1: "../../assets/images/shop/indir.jpeg",
        subject1: "Kurulma Tarihi: 15.05.2023 ",
        title1: "Kurucusu: Cem Tekin",
        description1: "Yeni kurulan elektronik mağazamızda artık hizmetinizdeyiz ",

        image2: "../../assets/images/shop/indir.png",
        subject2: "Mottomuz",
        title2: "Amaç ve Fayda",
        description2: "E-ticaret, her yerde ve her zaman alışverişin kapılarını size açar.",

        image3: "../../assets/images/shop/indir (1).png",
        subject3: "Kullanılan Teknolojiler ",
        title3: "Java Spring Framework / React Js / PostgreSQL",
        description3: "Yeni kurulan elektronik mağazamızda artık hizmetinizdeyiz ",
    }

    let products = { image1: "../../assets/images/1.jpg", image2: "../../assets/images/2.jpg", image3: "../../assets/images/3.jpg" }
    return (
        <div>

            <header className="header shop">
                <Banner info={shopInfos} />
                <Header info={shopInfos} cartInfos={cartInfos} />

                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                <NavBar />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Slider info={sliderInfos} />
            <SmallBanner products={products} />
            <Products />
            <MiddleBanner />
            <NewArrivals />
            <BestSellerProduct />
            <ImageAndText />
            <AboutUs about={aboutUsInfos} />
            <Services />
            <ContactUs />
            <ProductDetails />
            <Footer info={shopInfos} footerInfos={footerInfos} />
        </div>
    )
};

export default App;