import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
