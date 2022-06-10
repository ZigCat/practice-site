import React from "react";
import Head from "next/head";

const Kitchen = () => {
  return (
    <div className="catalog">
      <Head>
        <title>Бытовая техника</title>
      </Head>
      <div className="catalog-inner">
        <div className="catalog-head">
          <h1>Все товары во вкладке</h1>
        </div>
        <div className="catalog-items">
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="appliences-pages/fridge">
                <img src="/content/fridge.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Gorenje NRK619FAS4</p>
                <p>259990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="appliences-pages/washmachine">
                <img src="/content/washmachine.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>LG F-2M5HS6W</p>
                <p>239990тг</p>
              </div>
            </div>
          </div>
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="appliences-pages/iron">
                <img src="/content/iron.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Tefal FV-5697</p>
                <p>49990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="appliences-pages/conditioner">
                <img src="/content/conditioner.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>LG AC24BQ</p>
                <p>449990тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
