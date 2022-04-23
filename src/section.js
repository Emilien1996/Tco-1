import React from "react";
import './App.css';
const Section = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src="https://onex.am/images/smart-service.svg" alt="pic1" />
        </div>
        <div className="list">
        <p className="icon">
          <img
            src="https://onex.am/images/smart_services/photo-camera.svg"
            alt="camera"
          />
          Լուսանկարել դրսից
        </p>
        <p className="icon">
          <img
            src="https://onex.am/images/smart_services/photos-inside.svg"
            alt="camera"
          />
          Լուսանկարել ներսից
        </p>
        <p className="icon">
          <img
            src="https://onex.am/images/smart_services/stop.svg"
            alt="camera"
          />
          Կանգնեցնել
        </p>
        <p className="icon">
        <img
            src="https://onex.am/images/smart_services/check-order.svg"
            alt="camera"
          />
            Ստուգել պատվերը </p>
        <p className="icon">
        <img
            src='https://onex.am/images/smart_services/single-package.svg'
            alt="camera"
          />
            Չվերափաթեթավորել</p>
        <p className="icon">
        <img
            src='https://onex.am/images/smart_services/repackaging.svg'
            alt="camera"
          />
            Հավելյալ վերափաթեթավորում</p>
        <p className="icon">
        <img
            src='https://onex.am/images/smart_services/change-receiver.svg'
            alt="camera"
          />
            Փոխել ստացողին</p>
        <p className="icon">
        <img
            src='https://onex.am/images/smart_services/unboxing.svg'
            alt="camera"
          /> Բաժանել մասերի</p>
          <button className="btn">Ավելին</button>
      </div>
    </div>
      </div>
     
  );
};
export default Section
