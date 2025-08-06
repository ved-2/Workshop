import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import Stateexample from "./component/State";
import JSXAttribute from "./component/jsxAttribute";
import JSXFunction from "./component/jsxFunction";
import JSXFunctionWithContorolStmt from "./component/jsxFunction_ControlStmt";
import BootstrapExample from "./component/BootstrapExample";
import Counter from "./component/Counter";
import UseStateDemo from "./component/useStateDemo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Greet Functional Component</h1>
        <Welcome />
        <Stateexample />
        <JSXAttribute />
        <JSXFunction />
        <JSXFunctionWithContorolStmt />
        <BootstrapExample />
        <Counter/>
        <UseStateDemo/>
      </header>
    </div>
  );
}

export default App;
