import React from "react";
import { useContext, useState } from "react";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { appContext } from '../appContext'

const Chat = () => {

    const {handleChatClick} = useContext(appContext)

    return (

        <div className="chats" onClick={e=>handleChatClick("clicked")} sx={{
            
        }} >
            <div className="first">
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <div className="text">
                    <h5>item title</h5>
                    <h6>full name</h6>
                    <p><small>last message  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; time </small></p>

                </div>
            </div>
            <MoreVertIcon />
        </div>


    )
}

export default Chat