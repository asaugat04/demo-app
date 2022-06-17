import React from 'react'


import { useContext, useState } from "react";
import ChatMenu from "./ChatMenu";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

import { Typography } from '@mui/material';




const BodyLeft = () => {





    return (
        <div className='bodyLeft'>
            <ChatMenu />
            <div className="search">
                <SearchIcon sx={{
                    color: "gray",
                }} />
                <InputBase placeholder='search messenger' sx={{
                    margin: "0 0 0 15px",
                }} />
            </div>
            <div className="chats">
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
            <div className="chats">
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
            <div className="chats">
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
            <div className="chats">
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
            <div className="chats">
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
        </div>
    )
}


export default BodyLeft