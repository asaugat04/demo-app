import React from 'react'

import Search from './Search';
import ChatMenu from "./ChatMenu";

import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

import Chat from "./Chat";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { appContext } from '../appContext'
import { useContext, useState } from "react";

// import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    hide: {
        backgroundColor:'red',
        display:'none',

    }
})

const BodyLeft = () => {


    const {clicked} = useContext(appContext)


    console.log(clicked)
    const classes = useStyles()


    return (
        // className={clicked ? classes.hide:""}
        <Grid  container xs={12} m={0} p={0} direction="column" sx={{
            borderRight: "1px solid rgb(224, 224, 224)",
            display: clicked ? 'none': ""
        }} >
            <Grid item xs={12} pl={0} >
                <ChatMenu />
            </Grid>
            <Grid item xs={10} pl={0}>
                <Search />
            </Grid>
            {/* <Divider/> */}
            <Box component='div'  sx={{
                height: "63vh",
                overflowY: "auto",
                paddingBottom:"2px"
            }}>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </Box>


        </Grid>
    )
}


export default BodyLeft