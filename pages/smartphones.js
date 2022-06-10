import React from "react";
import Head from 'next/head';

const Smartphones = () => {
  return (
    <div className="catalog">
      <Head>
        <title>Смартфоны</title>
      </Head>
      <div className="catalog-inner">
        <div className="catalog-head">
          <h1>Все товары во вкладке</h1>
        </div>
        <div className="catalog-items">
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="smartphones-pages/iphone">
                <img src="/content/iphone.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>IPhone 13 Pro</p>
                <p>624990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="smartphones-pages/huawei">
                <img src="/content/huawei.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Huawei 50 Pro</p>
                <p>549990тг</p>
              </div>
            </div>
          </div>
          <div className="catalog-col">
            <div className="catalog-item">
              <a href="smartphones-pages/samsung">
                <img src="/content/samsung.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Samsung S22</p>
                <p>359990тг</p>
              </div>
            </div>
            <div className="catalog-item">
              <a href="smartphones-pages/xiaomi">
                <img src="/content/xiaomi.png" alt="" />
              </a>
              <div className="catalog-item-txt">
                <p>Xiaomi Mi 11 Pro</p>
                <p>269990тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartphones;
