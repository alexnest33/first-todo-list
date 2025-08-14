import { useState } from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import { useNavigation } from "react-router";

const FormLogin = () => {
  const [dataEntry, setDataEntry] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigation();
  const { getItem, setItem } = useLocalStorage("token");

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
      setItem(data);
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

  const navigation = () => {
    navigate('/todos')
  }

  return (
    <>
      <div className="formLogin">
        <form onSubmit={submit}>
          <label>Адрес электронной почты:</label>
          <input
            type="text"
            name="email"
            placeholder="e-mail"
            value={dataEntry.email}
            onChange={handleChange}
          />
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={dataEntry.password}
            onChange={handleChange}
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
