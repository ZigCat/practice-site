import React, { useState, useEffect } from "react";

const Cabinet = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });

  const handleForm = (type, value) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("fname", form.fname);
    localStorage.setItem("lname", form.lname);
    localStorage.setItem("isAuth", 1);
    setIsAuth(true);
  };

  const handleOut = () => {
      localStorage.removeItem('fname');
      localStorage.removeItem('lname');
      localStorage.setItem('isAuth', 0);
      setIsAuth(false);
  }

  const checkAuth = () => {
    if (
      localStorage.getItem("isAuth") == "0" ||
      localStorage.getItem("isAuth") == undefined
    ) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    setIsAuth(checkAuth());
  });
  console.log(isAuth);
  return (
    <div className="cabinet">
      <div className="cabinet-inner">
        <div className="cabinet-head">
          <h1>Личный кабинет</h1>
        </div>
        <div className="cabinet-form">
          {isAuth ? (
            <div className="cabinet-form-rows">
              <p>
                {localStorage.getItem("fname") +
                  " " +
                  localStorage.getItem("lname")}
              </p>
              <div className="cabinet-form-submit" onClick={handleOut}>
                Выйти
              </div>
            </div>
          ) : (
            <div className="cabinet-form-rows">
              <input
                type="text"
                value={form.fname}
                placeholder="Имя"
                onChange={(e) => handleForm("fname", e.target.value)}
              />
              <input
                type="text"
                value={form.lname}
                placeholder="Фамилия"
                onChange={(e) => handleForm("lname", e.target.value)}
              />
              <div className="cabinet-form-submit" onClick={handleSubmit}>
                Войти
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
