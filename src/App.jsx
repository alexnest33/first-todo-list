import AllPages from "./pages/AllPages";
import "./App.css";
import FormRegistred from "./components/FormRegistred";
import FormLogin from "./components/FormLogin";
import { Routes, Route, NavLink } from "react-router";

function App() {
  return (
    <>
      
      <div className="ss">
        <h1>Добро пожаловать</h1>
        <NavLink to="/registration">Регистрация</NavLink>
        <NavLink to="/login"> Вход</NavLink>

        <Routes>
          <Route path="/registration" element={<FormRegistred />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/todos" element={<AllPages />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
