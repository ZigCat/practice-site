import React from "react";
import Head from 'next/head';

const Main = () => {
  return (
    <div className="product">
      <Head><title>IPhone 13 Pro Case</title></Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/case.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Тип: </strong> чехол-накладка </p>
              <p> <strong> Материал: </strong> поликарбонат, полиуретан </p>
              <p> <strong> Совместимость: </strong> Iphone 13 Pro </p>
              <p> <strong> Технологии: </strong> MagSafe </p>
              <p> <strong> Заявленная защита: </strong> от потёртостей, сколов и ударов. </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 26.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: чехлы с поддержкой MagSafe хоть и завоевали в мире популярность,
          но всё также известны всем своей дороговизной.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
