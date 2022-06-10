import React, { useState } from "react";

const Select = ({ headName, options, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="select">
      <div className="select-inner">
        <div
          onClick={() => setOpen(!open)}
          className={open ? "select-head-active" : "select-head"}
        >
          <h3>{headName}</h3>
        </div>
        {open ? (
          <div className="select-menu">
            {options.map((item, key) => (
              <div className="select-item" key={key}>
                <a href={link}>{item}</a>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Select;
