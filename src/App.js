import Counter from "./components/Counter/Counter";
import ControlledInput from "./components/ControlledInput/ControlledInput";
import axios from "axios";
import Posts from "./components/Posts/Posts";
import './App.css';
function App() {
  return (
    <div className="App">
        <Counter/>
        <ControlledInput/>
        <Posts></Posts>
    </div>
  );
}

export default App;
