import { Box, Container } from '@mui/material';
import React from 'react'
import { useContext, useState } from "react";
import BodyLeft from "./BodyLeft";
import BodyMiddle from "./BodyMiddle";
import BodyRight from "./BodyRight"

import "./styles/body.css"

const Body = () => {




    return (
        <Box className="body" >
            <BodyLeft />
            <BodyMiddle />


            <BodyRight />
        </Box>
    )
}


export default Body