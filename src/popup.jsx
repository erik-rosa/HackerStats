import React from "react";
import { render } from "react-dom";
import 'bootstrap';
import './styles/popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TabBar from "./components/TabBar.jsx";
import Timer from "./assets/timer.png";
import Chart from "./assets/chart-areaspline.png";


const tabContent = [
    {
        title: "Timer Settings",
        image: Timer,
        content: "This is where the user will modify the timer's settings."
    },
    {
        title: "Analytics",
        image: Chart,
        content: "This is where the user will view their stats."
    }
]
function Popup(){
    return (
        <div className="div">
            <TabBar>
              {tabContent.map((tab, idx) => (
                <TabBar.TabPane key={`Tab-${idx}`} tab={tab.image}>
                  {tab.content}
                </TabBar.TabPane>
              ))}
            </TabBar>
        </div>
    );
}
render(<Popup/>,document.getElementById("react-target"));