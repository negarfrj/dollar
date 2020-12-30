import React, { useState } from 'react'

const api = { base : 'https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json'}

function App() {

  const [price,setPrice] = useState({});
  fetch ('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json?sana_buy_usd=p&sana_buy_eur=p&sana_buy_cad=p&sana_sell_usd=p&sana_sell_eur=p&sana_sell_cad=p&sana_buy_gbp=p&sana_sell_gbp=p&t&updated_at')
    .then (res => res.json())
    .then (result =>{ 
      setPrice(result);
      console.log(result);
    })
  

  return (
    <div className="App">
      <main> 
        {(typeof price != "undefined" ) ? (
          <div>
           <div className = "box">
           <div className = "countrybox">
            <img  src ="./assets/usa.png"/>
            دلار آمریکا
            </div>
            <div className = "pricebox">
             <p>فروش : {price.sana_sell_usd.p}</p>  
             <p>خرید : {price.sana_buy_usd.p}</p>
            </div>
           </div>
           <br/>
           <div className = "box">
           <div className = "countrybox">
            <img  src ="./assets/euro.png"/>
             یورو 
           </div>
           <div className = "pricebox">
            <p>فروش : {price.sana_sell_eur.p}</p>  
            <p>خرید :{price.sana_buy_eur.p}</p>
           </div>
           </div>
           <br/>
           <div className = "box">
           <div className = "countrybox">
            <img  src ="./assets/canada.png"/>
            دلار کانادا
            </div>
           <div className = "pricebox">
            <p>فروش :{price.sana_sell_cad.p}</p>  
            <p>خرید :{price.sana_buy_cad.p}</p>
           </div>
            </div>
           <br/>
           <div className = "box">
           <div className = "countrybox">
            <img  src ="./assets/uk.png"/>
            پوند انگلیس
           </div>
            <div className = "pricebox">
             <p>فروش :{price.sana_sell_cad_gbp.p}</p>  
             <p>خرید :{price.sana_buy_cad_gbp.p}</p>
            </div>
            </div>
           <br/>
        
           <div className = "updatebox">
            <img  src ="./assets/update.png"/>
            آخرین به روز رسانی :{price.t},{price.updated_at}
           </div>
        </div>  
        ):('')};
      </main>
    </div>
  );
}

export default App;
