import React from "react";
import Head from 'next/head';

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Apple Watch Nike Series</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/watch.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Серия: </strong> Nike Limited Edition </p>
              <p> <strong> Поддержка: </strong> iOS, Android </p>
              <p> <strong> Интерфейс: </strong> Bluetooth 5.0, Wi-fi </p>
              <p> <strong> Материал корпуса: </strong> алюминий </p>
              <p> <strong> Материал ремешка: </strong> фторкаучук </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 239.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: смарт-часы от Apple популярны во всём мире. Именно это модельизвестна своим стилем и брендом - Nike Series. 
          Особенный дизайн подчёрки-вает их по-своему. Apple Watch по праву считаются лучшими смарт-часами.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
