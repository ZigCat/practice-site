import React, { useState } from "react";
import Head from 'next/head';

const Main = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="product">
      <Head><title>Xiaomi Mi 11 Pro</title></Head>
      <div className="product-container">
        <div className="product-upper">
          <div className="product-upper-image"><img src="/content/xiaomi.png" alt="" /> </div>
          <div className="product-upper-description">
            <h3> Характеристики товара: </h3>
            <div className="product-upper-description-text">
              <p>
                {" "}
                <strong> Процессор: </strong> Snapdragon 870{" "}
              </p>
              <p>
                {" "}
                <strong> ОЗУ: </strong> 8GB{" "}
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
                <strong> Экран: </strong> матрица Amoled 120Hz, 6.28 дюйм{" "}
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
              </div>
            </div>
            <div className="product-upper-description-cost">
              <p> 269.990 KZT </p>
            </div>
          </div>
        </div>
        <div className="product-lower">
          <p>
            О смартфоне: смартфон, выпущенный корпорацией Xiaomi в 2022-ом году
            и объявлен как флагманское устройство. Тесты и бенчмарки, в
            большинстве случаев выдали средний результат. Обзоры: Rozetked,
            ROCO, Stupidmanworld и другие.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
