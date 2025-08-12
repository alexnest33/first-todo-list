import { useState } from "react";
import { Button, Flex } from "antd";

const FormRegistred = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
  });

  const userRegistred = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/users/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("Заполните поля");
    }

    if (formData.username.length < 2 || formData.username.length > 20) {
      alert("Имя может быть от 2-ух символов до 25");
    }
    userRegistred();
  };

  return (
    <>
      <div className="form">
        <h1>Регистрация пользователя:</h1>
        <form onSubmit={submit}>
          <label>Имя пользователя:</label>
          <input
            type="text"
            name="username"
            placeholder="Введите ваш никнейм"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Введите ваш email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            placeholder="Введите ваш пароль"
            value={formData.password}
            onChange={handleChange}
          />
          <label>Пол:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          <label>Возраст:</label>
          <input
            type="number"
            name="age"
            min={0}
            max={100}
            placeholder="Введите ваш возраст"
            value={formData.age}
            onChange={handleChange}
          />
          <Flex gap="small" wrap>
            <Button color="cyan" variant="solid" type="submit">
              Зарегистрироваться
            </Button>
          </Flex>
        </form>
      </div>
    </>
  );
};

export default FormRegistred;
