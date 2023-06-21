import logo from "./logo.svg";
import {add,subtraction,mul,div} from './components/cal';  
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>sum of two num {add(40, 5)}</li>
        <li>subtrac of two num {subtraction(30, 9)}</li>
        <li>mul of two num {mul(7, 8)}</li>
        <li>division of two num {div(3, 2)}</li>
      </ul>
    </>
  );
}

export default App;
