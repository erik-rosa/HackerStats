import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Timer from "../assets/timer.png";
import Chart from "../assets/chart-areaspline.png";
import TimerSettingTab from "./AllTabs/TimerSettingTab.jsx";
import AnalyticsTab from "./AllTabs/AnalyticsTab.jsx";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("timerSettings");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("timerSettings");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("analytics");
  };
  return (
    <div>
      <ul className="nav nav-tabs .nav-justified">
        <li className="nav-item" onClick={handleTab1}>
          <a
            className={`nav-link ${
              "timerSettings" === activeTab ? "active" : ""
            }`}
            href="#"
            onClick={handleTab1}
          >
            <img src={Timer}></img>
          </a>
        </li>
        <li className="nav-item" onClick={handleTab2}>
          <a
            className={`nav-link ${"analytics" === activeTab ? "active" : ""}`}
            href="#"
            onClick={handleTab1}
          >
            <img src={Chart}></img>
          </a>
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "timerSettings" ? <TimerSettingTab /> : <AnalyticsTab />}
      </div>
    </div>
  );
};
export default Tabs;
