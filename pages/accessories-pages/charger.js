import React from "react";
import Head from 'next/head';

const Main = () => {
  return (
    <div className="product">
      <Head><title>Apple Charger</title></Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/charger.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> Тип: сетевое зарядное устройство </p>
              <p> Поддержка: одно устройство, iPad, iPhone, Mac </p>
              <p> Интерфейс: Type-C </p>
              <p> Технологии: быстрая зарядка </p>
              <p> Материал корпуса: пластик </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 24.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
            О товаре: опыт использования аксессуара, по оценкам опросов, показал
            хороший результат. Из минусов - быстро-рвущийся кабель у основания
            корпуса.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
