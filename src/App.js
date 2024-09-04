import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>

  );
}

export default App;
