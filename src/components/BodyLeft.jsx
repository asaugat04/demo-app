import React from 'react'


import { useContext, useState } from "react";
import ChatMenu from "./ChatMenu";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

import Chat from "./Chat";
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

            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
           
        </div>
    )
}


export default BodyLeft