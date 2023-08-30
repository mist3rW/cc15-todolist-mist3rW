import { FaHome, FaYoutube } from "react-icons/fa";
import Header from "../components/Header.jsx";
import "../components/Header.scss";
import "./App.scss";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">SideBar</div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
