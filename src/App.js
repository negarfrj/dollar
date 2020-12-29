import React from 'react'

const api = { base : 'https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json'}

function App() {
  return (
    <div className="App">
      <main> 
        <div className = "box">
          <div className = "countrybox">
            <img  src ="./assets/usa.png"/>
           دلار آمریکا
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/euro.png"/>
            یورو 
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/canada.png"/>
            دلار کانادا
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/uk.png"/>
            پوند انگلیس
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/coin.png"/>
            سکه بهار آزادی 
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/coin.png"/>
            نیم سکه بهار آزادی
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "box">
          <div className = "countrybox">
          <img  src ="./assets/coin.png"/>
            ربع سکه بهار آزادی
          </div>
          <div className = "pricebox">
            <p>فروش :</p>  
            <p>خرید :</p>
          </div>
        </div>
        <br/>
        <div className = "updatebox">
        <img  src ="./assets/update.png"/>
          آخرین به روز رسانی :
        </div>

       
      </main>
    </div>
  );
}

export default App;
