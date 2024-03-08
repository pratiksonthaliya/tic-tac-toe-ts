import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Board />
    </div>
  );
}

export default App;
