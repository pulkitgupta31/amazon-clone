import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="1"
                        title="The lean startup" 
                        price={29.99} 
                        image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title="HP 15 Entry Level 15.6-inch (39.62 cms) HD Laptop (AMD 3020e/4GB/1TB HDD)" 
                        price={529.99} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/719F8WdfBzL._AC_UL200_SR200,200_.jpg" 
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="3"
                        title="Fire TV Stick 4K with Alexa Voice Remote | Stream in 4K resolution" 
                        price={229.99} 
                        image="https://m.media-amazon.com/images/I/51G8wQVB8hL._SL110_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="4"
                        title="xiTix Infrared Thermometer - Digital Thermometer Forehead" 
                        price={49.99} 
                        image="https://m.media-amazon.com/images/I/417LQhQ0cuL.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="5"
                        title="GAINX Retro Rectangular Aviator Sunglasses" 
                        price={129.99} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/71Z%2BnmNrLZL._AC_UL200_SR200,200_.jpg" 
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="6"
                        title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router" 
                        price={99.99} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/51ax8peHlPL._AC_UL200_SR200,200_.jpg" 
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
