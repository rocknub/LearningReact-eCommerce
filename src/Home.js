import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    const usuarios = [
        {
            nome: 'Brian',
            email: 'b@b',
        },
        {
            nome: 'Professor Lino',
            email: 'professor@professor',
        }
    ]

    const showNames = () => {
        alert(usuarios.nome);
    }

    return (
        <div className="home">
            <div className="home__container">

                <img src="https://i.postimg.cc/ZqW9D6Dt/animated.gif " alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="6"
                        title="ZOTAC Placa gráfica gamer GeForce RTX 4090 Trinity 24GB GDDR6X 384-bit 21 Gbps PCIE 4.0, refrigeração avançada IceStorm 3.0, iluminação RGB Spectra 2.0, ZT-D40900D-10P"
                        price={892999.99}
                        rating={5}
                        image="https://th.bing.com/th/id/R.e5b2a62f963833f83b13fcf817deb9f1?rik=vBgV%2fEdialym6g&pid=ImgRaw&r=0"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={110.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    />
                    <Product
                        id="2"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={2390.20}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={1990.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={980.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="5"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={5980.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="7"
                        title="Pneu Aptany Aro 18 RU101 225/50R18 95W"
                        price={599.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71tBueMAiwL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                    <Product
                        id="8"
                        title="Little Trees Aromatizador de carro | Árvore de papel pendurada para casa ou carro | Vanillaroma | Pacote com 6"
                        price={95.40}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/41ERLHvuGfL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                    <Product
                        id="9"
                        title="Luva de Microfibra, Tramontina"
                        price={22.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81ZWGtQ5x2L.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="10"
                        title="Kit 8 Cuecas Boxer Algodão, Duomo, Masculino"
                        price={1120.96}
                        rating={1}
                        image="https://m.media-amazon.com/images/I/81eTRT1hBxL._AC_SX466_.jpg"
                    />
                    <Product
                        id="11"
                        title="Fisher-Price Cadeira para Auto Snugfix 0-36kg Grupos 0, I, II e III Rotacional Cinza BB332"
                        price={867.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/514QXHPY7CL._AC_SX522_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={10940.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

            </div>

            <div className="redArea">
                <p>
                    
                </p>
            </div>
        </div>
    )
}

export default Home;