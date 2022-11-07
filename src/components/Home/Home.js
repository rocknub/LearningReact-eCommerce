import React from "react";
import Product from "../Products/Product";

import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <img src="https://svgshare.com/i/nuD.svg" alt="" className="homeImage" />

                <div className="homeRow">
                    <Product
                        id="1"
                        title="Mouse Gamer Logitech 100% Original"
                        price={120.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/519Xke4dPdL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                    <Product 
                        id="2"
                        title="Fire TV Stick Lite: Streaming em Full HD com Alexa (sem comandos de TV)"
                        price={236.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41yI07Cs9UL._AC_SX679_.jpg"
                    />
                </div>
                <div className="homeRow">
                    <Product 
                        id="3"
                        title="Kit com 2 Esponjas Microfibra e 1 Limpa Telas Spray 120ml, Estampas Sortidas, Flash Limp"
                        price={11.60}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/91D6LLUKtPL._AC_SX569_.jpg"
                    />
                    <Product 
                        id="4"
                        title="Kindle 10ª Geração com bateria de longa duração - Cor Preta"
                        price={426.25}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51mVAgKOWgS._AC_SX679_.jpg"
                    />
                    <Product 
                        id="5"
                        title="Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass Preto - JBLT510BTBLK"
                        price={229.00}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SX679_.jpg"
                    />
                </div>
                <div className="homeRow">
                    <Product 
                        id="6"
                        title="Monitor Gamer Curvo Samsung Odyssey 49 Mini LED, DQHD, 240Hz, 1ms, tela super ultrawide, HDMI, Display Port, USB, G-sync, Freesync Premium Pro, com ajuste de altura, branco, série NEO G9"
                        price={10.000}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51PUxhnhvYL._AC_SX679_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;