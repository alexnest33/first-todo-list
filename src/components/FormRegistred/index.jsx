import React from "react";
import { Button, Flex } from "antd";

const FormRegistred = () => {
    
  const userInfo = {
    id: 1751,
    username: "220marry",
    email: "220example@example.com",
    gender: "female",
    age: 25,
  };

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
          body: JSON.stringify(userInfo),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form">
        <h1>Регистрация пользователя:</h1>
        <form>
          <label>Имя пользователя:</label>
          <input type="text" placeholder="Введите ваш никнейм" />
          <label>email:</label>
          <input type="email" placeholder="Введите ваш email" />
          <label>Пароль:</label>
          <input type="text" placeholder="Введите ваш пароль" />
          <label>Пол:</label>
          <select name="gender">
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          <label>Возраст:</label>
          <input
            type="number"
            min={0}
            max={100}
            placeholder="Введите ваш возраст"
          />
        </form>
        <Flex gap="small" wrap>
          <Button
            color="cyan"
            variant="solid"
            type="primary"
            onClick={userRegistred}
          >
            Зарегистрироваться
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default FormRegistred;
