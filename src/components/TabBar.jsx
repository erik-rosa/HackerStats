import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TabBar = ({children, active = 0}) => {
    const [activeTab,setActiveTab] = useState(active);
    const [tabsData,settabsData] = useState([]);
    useEffect(() => {
        let data = [];

        React.Children.forEach(children,element => {
            if(!React.isValidElement(element)) return;

            const {
                props: {tab,children}
            } = element;
            data.push({tab,children});
        });
        settabsData(data);
    }, [children])

    return(
        <div className = "w-100">
            <ul className = "nav nav-tabs">
                {
                    tabsData.map(({tab},idx) => (
                        <li className="nav-item">
                            <a 
                            className={`nav-link ${idx === activeTab ? "active" : ""}`} 
                            href="#"
                            onClick={()=> setActiveTab(idx)}
                            >
                                {tab}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="tab-content p-3">
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
    )
}
const TabPane = ({children}) => {
    return {children}
}

TabBar.TabPane = TabPane;
export default TabBar;