import { useState } from "react";

const FormLogin = () => {
  const [dataEntry, setDataEntry] = useState({
    email: "",
    password: "",
  });

  const userLogin = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataEntry),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    if (!dataEntry.email || !dataEntry.password) {
      alert("Заполните пустые поля");
    } else {
      userLogin();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataEntry((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="formLogin">
        <form onSubmit={submit}>
          <label>Адрес электронной почты:</label>
          <input
            type="text"
            placeholder="e-mail"
            value={dataEntry.email}
            onChange={handleChange}
          />
          <label>Пароль:</label>
          <input
            type="password"
            placeholder="password"
            value={dataEntry.email}
            onChange={handleChange}
          />
          <button>Войти</button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
