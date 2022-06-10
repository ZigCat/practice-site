import React from "react";
import Head from "next/head";

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Стиральная машина LG F-2M5HS6W</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/washmachine.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Тип: </strong> обычный </p>
              <p> <strong> Максимальная загрузка белья в килограмах: </strong> 7 </p>
              <p> <strong> Тип мотора: </strong> инверторный </p>
              <p> <strong> Максимальный уровень шума в децибилах: </strong> 74 </p>
              <p> <strong> Система управления: </strong> электронная </p>
              <p> <strong> Класс эффективности стирки: </strong> А </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 239.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: стиральная машина LG модели F-2M5HS6W оценена многими как <span className="green"> хороший </span> вариант для покупки.
          Он способен покрывать любые задачи по стирке, отжиму ваших вещей в любое время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
