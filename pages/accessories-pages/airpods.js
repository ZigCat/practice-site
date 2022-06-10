import React from "react";
import Head from 'next/head';

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Air Pods Pro</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/airpods.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Тип конструкции: </strong> TWS (Беспроводные) </p>
              <p> <strong> Поддержка: </strong> до 3-ёх устройств Apple, одно Android </p>
              <p> <strong> Интерфейс: </strong> Bluetooth 5.0 </p>
              <p> <strong> Технологии: </strong> активное шумоподавление </p>
              <p> <strong> Материал: </strong> пластик </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 129.990 KZT </p>
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
