import React, {Component} from 'react';
import {SidebarData} from "../Constants";

const SideNavBar = () => {
    return (
        <div className="SideBar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row" onClick={()=>{window.location.pathname = val.link}}>
                            {" "}
                            <div>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}

export default SideNavBar;
