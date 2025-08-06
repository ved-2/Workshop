import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import Stateexample from "./component/State";
import JSXAttribute from "./component/jsxAttribute";
import JSXFunction from "./component/jsxFunction";
import JSXFunctionWithContorolStmt from "./component/jsxFunction_ControlStmt";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link" //cccvvvv
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Greet Functional Component</h1>
        <h1>Greet Functional Component</h1>
        <Welcome />
        <Stateexample />
        <JSXAttribute />
        <JSXFunction />
        <JSXFunctionWithContorolStmt />
      </header>
    </div>
  );
}

export default App;
