import React from 'react'

import { useContext, useState } from "react";
import Grid from "@mui/material/Grid"
import MenuIcon from '@mui/icons-material/Menu';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Badge, Button, Stack, Typography } from '@mui/material';
import BasicSelect from "./BasicSelect"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationShow from "./NotificationShow"
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import "./styles/head.css"
import { Box } from '@mui/system';
import Cmenu from './Cmenu';


const locations = ['ktm', 'pkh', 'bkt']
const categories = ['electronics', 'mobiles', 'sports', 'music']
const languages = ['eng', 'nep']

const Head = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
    const handleMenuClick = (e) => {
      setAnchorEl(e.currentTarget)
    }
  
  
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
        <Grid container xs={12} p={3} >
            <Grid item xs={12} lg={3}  >
                <Stack direction='row' spacing={2}  >
                    <Box ml={3} >
                        <MenuIcon onClick={handleMenuClick} fontSize='large' />
                        <Cmenu open={open} handleClose={handleClose} top={20} left={20} />
                    </Box>
                    <Box flex={1} pr={5}>
                        <Typography variant='h5' align='center' sx={{
                            // backgroundColor: 'blue',
                            // width:'500px',
                            justifyContent: "center",
                        }} >
                            Logo
                        </Typography>
                    </Box>
                </Stack>
            </Grid>

            <Grid item xs={12} lg={6} sx={{
                display: { xs: "none", lg: "block" },
                // backgroundColor:"red"
            }}>
                <Grid item xs={12} sx={{display:'flex'}} justifyContent='center' >
                    <Button variant='solid' startIcon={<SystemUpdateAltIcon />}  >
                        Download The App
                    </Button>
                </Grid>
                <Grid item xs={12} mt={2} >
                    <Stack direction='row' justifyContent='space-evenly' >
                        <Stack direction='row' alignItems='center' >
                            <LocationOnIcon />
                            <BasicSelect datas={locations} />
                        </Stack>
                        <Stack direction='row'>
                            <BasicSelect datas={categories} />
                            <Button disableFocusRipple variant='solid' endIcon={<SearchIcon />} sx={{
                                backgroundColor: "rgb(224, 224, 224)"
                            }} >
                                <InputBase required placeholder='search...' />
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>


            <Grid item xs={12} lg={3}  sx={{
                display: { xs: "none", lg: "block" },
                // backgroundColor:"red"
            }}>
                <Grid item xs={12} pl={7}>
                    <Stack direction='row'>
                        <BasicSelect datas={languages} />
                        <NotificationShow />
                    </Stack>
                </Grid>

                <Grid item xs={12} mt={3}>
                    <Stack direction="row" justifyContent='space-evenly'>
                        <Stack direction='row' alignItems='center'  >
                            <AccountCircle fontSize='large' />
                            <Typography variant='h6'>
                                Login/Register
                            </Typography>


                        </Stack>
                        <Button variant='contained' color='warning' >
                            Post Free Ad
                        </Button>
                    </Stack>
                </Grid>


            </Grid>


        </Grid >
    )
}


export default Head