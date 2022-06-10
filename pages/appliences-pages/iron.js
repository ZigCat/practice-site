import React from "react";
import Head from "next/head";

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Утюг Tefal FV-5697</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/iron.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Мощность в ваттах: </strong> 3000 </p>
              <p> <strong> Подача пара в граммах в минуту: </strong> 50 </p>
              <p> <strong> Паровой удар в граммах в минуту: </strong> 270 </p>
              <p> <strong> Материал "подошвы": </strong> Durilium Airglide </p>
              <p> <strong> Автоматическое отключение: </strong> есть </p>
              <p> <strong> Противокапельная система: </strong> есть </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 49.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: утюг Tefal модели FV-5697 оценён многоими как <span className="green"> хороший </span> вариант для покупки.
          Он способен покрывать любые задачи по выглаживанию и отпариванию ваших вещей в любое время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
