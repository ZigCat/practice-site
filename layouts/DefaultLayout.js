import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-top">
        <div className="container-head">
          <div className="layout-top-inner">
            <div className="layout-top-company">
              <a href="/"><img src="/LOGO-SID.png" alt="" /></a>
              <div className="layout-top-company-city">
                <p>Алматы</p>
              </div>
            </div>
            <div className="layout-top-info">
              <div className="layout-top-info-lang">
                <p>
                  <a href="/">RUS</a>
                </p>
              </div>
              <div className="layout-top-info-tel">
                <p>Горячая линия: +7(708)123-45-67 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-inner">{children}</div>
      <div className="layout-bottom">
        <div className="container-head">
          <div className="layout-bottom-inner">
            <div className="layout-bottom-top">
              <h1>О нас</h1>
            </div>

            <div className="layout-bottom-body">
              <p>
                <strong>Контактная информаия:</strong> +7(708)123-45-67 или
                support@sidgroup.com
              </p>
              <p>
                <strong> Адрес: </strong> Казахстан, г. Алматы, БЦ "Essentay Mall"
              </p>
              <div className="layout-bottom-body-icons">
                <div className="layout-bottom-body-firsticon">
                  <a href="instagram.com" target="_blank">
                    <img src="/inst.old.png" />
                  </a>
                </div>
                <div className="layout-bottom-body-secondicon">
                  <a href="vk.com" target="_blank">
                    <img src="/vk.old.png" />
                  </a>
                </div>
                <div className="layout-bottom-body-thirdicon">
                  <a href="facebook.com" target="_blank">
                    <img src="/fc.old.png" />
                  </a>
                </div>
              </div>
              <div className="layout-bottom-body-rights">
                <p>© 2018-2022 TOO “SID Group”</p>
                <p>Все права защищены</p>
                <p>
                  Несогласованное использование контента компании противозаконно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
