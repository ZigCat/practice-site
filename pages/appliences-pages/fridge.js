import React from "react";
import Head from "next/head";

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Холодильник Gorenje NRK619FAS4</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/fridge.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Тип: </strong> двухкамерный </p>
              <p> <strong> Объём в литрах: </strong> 304 </p>
              <p> <strong> Система размораживания: </strong> No Frost Plus </p>
              <p> <strong> Уровень шума в децибилах: </strong> 59 </p>
              <p> <strong> Потребление электроэнергии в кВт/год: </strong> 304 </p>
              <p> <strong> Высота в метрах: </strong> 1.68 </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 259.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: холодильник Gorenje модели NRK619FAS4 оценён многими как <span className="green"> хороший </span> вариант для покупки.
          Он способен покрывать любые задачи по заморозке и хранению домашних продуктов в полную силу. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
