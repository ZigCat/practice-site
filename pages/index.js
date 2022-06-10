import React from "react";
import Head from "next/head";
import Cabinet from "../components/Cabinet";
import Currency from "../components/Currency";
import Select from "../components/Select";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div className="mainpage">
      <Head>
        <title>Главная страница SID project</title>
      </Head>
      <div className="container">
        <div className="mainpage-inner">
          <div className="mainpage-frow">
            <Slider />
            <div className="mainpage-frow-pop">
              <img src="/content/bestseller.png" alt="" />
            </div>
            <div className="mainpage-frow-right">
              <Cabinet />
              <Currency />
            </div>
          </div>
          <div className="mainpage-srow">
            <div className="mainpage-srow-selects">
              <Select
                headName="Смартфоны"
                options={["Iphone 13 PRO", "Samsung S22", "Xiaomi 11 Pro"]}
                link="/smartphones"
              />
              <Select
                headName="Бытовая техника"
                options={[
                  "Gorenje NRK619FAS4",
                  "Tefal FV-5697",
                  "LG F-2M5HS6W",
                ]}
                link="/kitchen"
              />
              <Select
                headName="Аксессуары"
                options={[
                  "Зарядка Apple",
                  "Чехол IPhone 13 Pro",
                  "Apple Watch Nike",
                ]}
                link="/accessories"
              />
            </div>
            <div className="mainpage-srow-pop">
              <img src="/content/promo1.jpg" alt="" />
              <img src="/content/promo2.png" alt="" />
              <img src="/content/promo3.png" alt="" />
              <img src="/content/promo4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
