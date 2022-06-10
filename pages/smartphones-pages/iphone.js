import React, { useState } from "react";
import Head from 'next/head';

const Main = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="product">
      <Head><title>IPhone 13 Pro</title></Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"> <img src="/content/iphone.png" alt="" /></div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p>
                <strong> Процессор: </strong> A-15 Bionic{" "}
              </p>
              <p>
                {" "}
                <strong> ОЗУ: </strong> 4GB{" "}
              </p>
              <p>
                {" "}
                <strong> Объём встроенной памяти: </strong>{" "}
              </p>
              <p>
                {" "}
                <strong> Интерфейс: </strong> Type-C, NFC, 5G, Wi-fi 6{" "}
              </p>
              <p>
                {" "}
                <strong> Экран: </strong> матрица Liquid Retina HD, 6.1 дюйм{" "}
              </p>
              <div className="product-upper-description-text-memory">
                <div
                  onClick={() => setActive(1)}
                  className={
                    active == 1
                      ? "product-upper-description-text-memory-box-active"
                      : "product-upper-description-text-memory-box"
                  }
                >
                  <p> 128GB </p>
                </div>
                <div
                  onClick={() => setActive(2)}
                  className={
                    active == 2
                      ? "product-upper-description-text-memory-box-active"
                      : "product-upper-description-text-memory-box"
                  }
                >
                  <p> 256GB </p>
                </div>
                <div
                  onClick={() => setActive(3)}
                  className={
                    active == 3
                      ? "product-upper-description-text-memory-box-active"
                      : "product-upper-description-text-memory-box"
                  }
                >
                  <p> 512GB </p>
                </div>
              </div>
            </div>
            <div className="product-upper-description-cost">
              <p> 129.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
            О смартфоне: смартфон, выпущенный корпорацией Apple в 2021-ом году и
            объяв-лен как флагманское устройство. Тесты и бенчмарки, в
            большинстве случае, выдали хороший результат. Обзоры: Rozetked,
            ROCO, Wylsacom и другие.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
