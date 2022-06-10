import React from "react";
import Head from "next/head";

const Main = () => {
  return (
    <div className="product">
      <Head>
        <title>Кондиционер LG AC24BQ</title>
      </Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/conditioner.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p> <strong> Мощность в ваттах: </strong> 6600 </p>
              <p> <strong> Тип компрессора: </strong> инверторный </p>
              <p> <strong> Тип хладогента: </strong> R32 </p>
              <p> <strong> Максимальный уровень шума в децибилах: </strong> 50 </p>
              <p> <strong> Поддержка Wi-fi: </strong> есть </p>
              <p> <strong> Площадь обслуживаемого помещения в квадратных метрах: </strong> 65 </p>
            </div>
            <div className="product-upper-description-cost">
                <p> 449.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
          О товаре: кондиционер LG модели AC24BQ оценён многими как <span className="green"> хороший </span> вариант для покупки.
          Он способен покрывать любые задачи по охлаждению и кондиционированию разных помещений в любое время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
