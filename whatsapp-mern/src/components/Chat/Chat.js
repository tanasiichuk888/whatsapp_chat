import React, { useState } from 'react';
import './Chat.css';
import {Avatar} from "@material-ui/core";
import {AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";
import axios from '../../axios';

function Chat({ messages }) {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Mykola Tanasiichuk",
            timestamp: "12 second ago",
            received: true,
        });

        setInput('');
    };

    return (
        <div className="chat">
        <div className="chat__header">
            <Avatar src="https://st.fl.ru/users/Di/Direct_Master/foto/f_55358d114cf7f3ba.jpg"/>

            <div className="chat__headerInfo">
                <h3>Custumer</h3>
                <p>Last seen at...</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p key={message.index} className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default Chat;