import React from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://st.fl.ru/users/ch/chudoudo/foto/f_1725ef0b3b8d7d9e.jpg"/>
            <div className="sidebarChat__info">
                <h2>Irina</h2>
                <p>Goodbye</p>
            </div>
        </div>
    )
}

export default SidebarChat;