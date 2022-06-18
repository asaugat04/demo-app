import React from 'react'

import Search from './Search';
import { useContext, useState } from "react";
import ChatMenu from "./ChatMenu";

import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

import Chat from "./Chat";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

// import Divider from '@mui/material/Divider';

const BodyLeft = () => {





    return (
        // <div className='bodyLeft'>
        //     <ChatMenu />
        //     <div className="search">
        //         <SearchIcon sx={{
        //             color: "gray",
        //         }} />
        //         <InputBase placeholder='search messenger' sx={{
        //             margin: "0 0 0 15px",
        //         }} />
        //     </div>
        //     <Box component='div' sx={{
        //         height: "70vh",
        //         overflowY: "auto",
        //         minWidth: "350px"
        //     }} >


        //     </Box>
        // </div>
        <Grid container spacing={0} direction="column" sx={{borderRight:"1px solid rgb(224, 224, 224)"}} >
            <Grid item xs={11}>
                <ChatMenu />
            </Grid>
            <Grid item xs={10}>
                <Search />
            </Grid>
            {/* <Divider/> */}
            <Box component='div' sx={{
                height:"67vh",
                overflowY:"auto"
            }}>
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
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
            </Box>


        </Grid>
    )
}


export default BodyLeft