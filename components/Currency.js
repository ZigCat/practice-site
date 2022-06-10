import React from "react";

const Currency = () => {
  return (
    <div className="currency">
      <div className="currency-inner">
        <div className="currency-values">
          <p><img src="/dollar.png" />USD - 426.4</p>
          <p><img src="/euro.png" />EUR - 531.8</p>
          <p><img src="/ruble.png" />RUB - 4.6</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;
