import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Headers";
import Login from "./components/LoginForm";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Body from "./pages/Body";

const App = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;