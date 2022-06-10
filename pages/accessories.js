import React from "react";
import Head from 'next/head';

const Accessories = () => {
  return (
    <div className="catalog">
      <Head>
        <title>Аксессуары</title>
      </Head>
      <div className="catalog-inner">
        <div className="catalog-head">
          <h1>Все товары во вкладке</h1>
        </div>
        <div className="catalog-items">
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="accessories-pages/charger">
                <img src="/content/charger.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Apple Charger</p>
                <p>24990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="accessories-pages/case">
                <img src="/content/case.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>IPhone 13 Pro Case</p>
                <p>26990тг</p>
              </div>
            </div>
          </div>
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="accessories-pages/watch">
                <img src="/content/watch.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Apple Watch Nike Series</p>
                <p>239990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="accessories-pages/airpods">
                <img src="/content/airpods.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Air Pods Pro</p>
                <p>129990тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
