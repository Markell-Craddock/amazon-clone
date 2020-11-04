import React from "react";
import "./Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='banner'
        />

        <div className='home__row'>
          <Product
            id='92081ss96'
            title='Lotus Steel Tongue Drum with Free Padded Travel Bag & Mallets'
            price={139.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71rt45jnEjL._AC_SL1500_.jpg'
            rating={5}
          />

          <Product
            id='4844ds844'
            title='DeskCycle Ellipse: Under Desk Elliptical Black'
            price={259.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81CkKFn70ZL._AC_SL1500_.jpg'
            rating={4}
          />

          <Product
            id='4841844'
            title='Microsoft Surface Laptop 3 – Sandstone'
            price={1299.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71sW0%2BvlWHL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='92215'
            title='SAMSUNG LC27F398FWNXZA SAMSUNG C27F398 27 Inch Curved LED Monitor'
            price={219.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg'
            rating={4}
          />

          <Product
            id='48144'
            title='1.44" HD Touch Screen Smartwatch for Children with SOS (Blue)'
            price={29.86}
            image='https://images-na.ssl-images-amazon.com/images/I/71Lpv48Bh2L._AC_SL1500_.jpg'
            rating={4}
          />

          <Product
            id='595955'
            title='3.3 Inch WiFi Digital Photo Frame - Share Moments via App or E-Mail'
            price={214.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81bXGhPa2cL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='59551855415'
            title='R.W.FLAME 36 inch Recessed and Wall Mounted Electric Fireplace, Ultra Thin ad Low Noise, Fit for 2 x 4 and 2 x 6 Stud, Remote Control with Timer,Touch Screen,Adjustable Flame Color and Speed - 60"'
            price={379.99}
            image='https://images-na.ssl-images-amazon.com/images/I/517CaWHzfuL._AC_SL1200_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
