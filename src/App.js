import Header from "./components/Header/header";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "98%",
        margin: "auto",
        height: "96vh",
        padding: "2vh 0",
      }}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
