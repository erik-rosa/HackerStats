/*global chrome*/
import React from "react";
import { render } from "react-dom";
import 'bootstrap';
import './styles/popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TimerSetting from './components/TimerSetting.jsx';
import Tabs from "./components/Tabs.jsx";


function Popup(){
    return (
        <div className="div">
            <Tabs/>
        </div>
    );
}
render(<Popup/>,document.getElementById("react-target"));