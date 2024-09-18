import Counter from "./components/Counter/Counter";
import ControlledInput from "./components/ControlledInput/ControlledInput";
import axios from "axios";
import Posts from "./components/Posts/Posts";
import './App.css';
import ListManager from "./components/ListManager/ListManager";
import Popup from "./components/UI/Popup/Popup";
import {useState} from "react";
import CustomButton from "./components/UI/button/CustomButton";
function App() {
  const [modal,setModal]=useState(false);
  return (
    <div className="App">
        <div className="AppTop">
            <div className="AppAction">
                <Counter/>
                <ControlledInput/>
            </div>
            <div className="AppList">
                <ListManager/>
            </div>
        </div>
        <CustomButton onClick={()=>setModal(true)} style={{marginTop:'14px'}}>Popup</CustomButton>
        <Posts/>
        <Popup visible={modal} setVisible={setModal} >Я текст popup </Popup>
    </div>
  );
}

export default App;
