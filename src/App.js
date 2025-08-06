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
      <Welcome />
      <Stateexample />
      <JSXAttribute />
      <JSXFunction />
      <JSXFunctionWithContorolStmt />
      <BootstrapExample />
      <Counter />
      <UseStateDemo />
    </div>
  );
}

export default App;
