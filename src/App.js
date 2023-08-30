import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./pages/login/Login";
import { Menu } from "./pages/menu/Menu";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem('token'))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Menu /> : <Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;