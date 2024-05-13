import logo from "./logo.svg";
import "./App.css";
import GitHub from "./GitHub";
import DescriptionCss from "./CSS";
import ReactExp from "./ReactExp.tsx";
import Terminal from "./Terminal.js";

function App() {
  return (
    <div className="App">
      <h1>Github Infomation</h1>
      <GitHub />
      <h1>CSS Information</h1>
      <DescriptionCss />

      <h1>React Information</h1>
      <ReactExp />
      <h1>Terminal Information</h1>
      <Terminal />
    </div>
  );
}

export default App;
