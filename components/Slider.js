import React, { useState, useEffect } from "react";

const Slider = () => {
  const [img, setImg] = useState(1);

  const changeByArrows = (pos) =>{
    let a = img - 1
    let b = img + 1
    pos && b <= 3 ? setImg(b)
    : !pos && a >= 1 ? setImg(a)
    : pos && b > 3 ? setImg(1)
    : !pos && a < 1 ? setImg(3)
    : {}
  }
  return (
    <div className="slider">
      <div className="slider-inner">
        <div className="slider-imgs">
          {img == 1 ? <img src="/content/apple.jpg" alt="" /> : <></>}
          {img == 2 ? <img src="/content/oneplus.jpg" alt="" /> : <></>}
          {img == 3 ? <img src="/content/samsung.jpg" alt="" /> : <></>}
        </div>
        <div className="slider-arrows">
          <img onClick={() => changeByArrows(false)} src="/left-arrow.png" alt="" />
          <img onClick={() => changeByArrows(true)} src="/right-arrow.png" alt="" />
        </div>
        <div className="slider-dots">
          <div onClick={() => setImg(1)} className={img == 1 ? "slider-dot-active" : "slider-dot"}></div>
          <div onClick={() => setImg(2)} className={img == 2 ? "slider-dot-active" : "slider-dot"}></div>
          <div onClick={() => setImg(3)} className={img == 3 ? "slider-dot-active" : "slider-dot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
