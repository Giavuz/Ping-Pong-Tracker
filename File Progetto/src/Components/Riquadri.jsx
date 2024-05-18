import React from "react";
import { RiquadriPersone } from "../Js/riquadri";

const Riquadri = () => {

  return (
    <>
      <div className="divPrinc">
        {RiquadriPersone.map((item, index) => {
          return (
            <div className="divRiquadri" key={index}>
              {/* <img className="imgRiquadri" src={`/${item.img}`} alt={item.alt} onError={(e) => {e.target.style.display = 'none'}} /> */}
              <div className="immaginiAboutUs" style={{ backgroundImage: `url(${item.img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <br />
                <br />
              </div>
              <h1 className="titoloRiquadri">{item.title}</h1>
              <p className="pRiquadri">{item.p}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Riquadri;
