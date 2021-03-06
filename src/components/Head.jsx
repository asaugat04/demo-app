import React from 'react'

import { useContext, useState } from "react";
import { appContext } from '../appContext'

import Grid from "@mui/material/Grid"
import MenuIcon from '@mui/icons-material/Menu';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Badge, Button, Divider, Stack, Typography } from '@mui/material';
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    hide: {
        display: "none",
    },
    makeTwoRows: {
        flexDirection: "column",
        justifyContent: "center"
    },
    makeSingleRow: {
        flexDirection: "row"
    }
})




const locations = ['ktm', 'pkh', 'bkt']
const categories = ['electronics', 'mobiles', 'sports', 'music', 'music', 'music', 'music', 'music', 'music', 'music', 'music', 'music']
const languages = ['eng', 'nep']

const Head = () => {


    const { clicked } = useContext(appContext)



    const classes = useStyles()
    const matches = useMediaQuery('(max-width:810px)');
    const matches1 = useMediaQuery('(max-width:557px)');


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget)
    }


    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Grid container xs={12} p={2} sx={{
            
        }} >
            <Grid item xs={12} lg={3}  >
                <Stack direction='row' alignItems='center' spacing={2} mt={matches ? 0 : 3}  >

                    {/* menu */}
                    <Box ml={matches ? 0 : 3}  >
                        <MenuIcon onClick={handleMenuClick} fontSize='large' />
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={open}
                            open={open}
                            onClose={handleClose}
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 20, left: 20 }}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}




                        >
                            <Stack direction='column' spacing={1}>
                                <MenuItem onClick={handleClose} >
                                    <Button variant='solid' color='neutral' startIcon={<ArrowBackIosIcon fontSize='large' />}>Back</Button>
                                </MenuItem>

                                <MenuItem disableTouchRipple disableFocusRipple sx={{
                                    display: { md: "block", lg: "none" },
                                    backgroundColor: "transparent"
                                }} >
                                    <Stack direction={matches1 ? "column" : "row"} justifyContent='space-evenly' >
                                        <Stack direction='row' alignItems='center' justifyContent='center' >
                                            <LocationOnIcon />
                                            <BasicSelect datas={locations} />
                                            <BasicSelect datas={categories} />
                                        </Stack>
                                        {/* <Stack direction='row'> */}
                                        <Button disableFocusRipple variant='solid' endIcon={<SearchIcon />} sx={{
                                            backgroundColor: "rgb(230, 238, 255)"
                                        }} >
                                            <InputBase required placeholder='search...' />
                                        </Button>
                                        {/* </Stack> */}
                                    </Stack>
                                </MenuItem>
                                <MenuItem onClick={handleClose} >
                                    <Button variant='solid' color='neutral' startIcon={<AccountCircle fontSize='large' />}>Profile</Button>
                                </MenuItem><MenuItem onClick={handleClose} >
                                    <Button variant='solid' color='neutral' startIcon={<SettingsIcon fontSize='large' />}>Settings</Button>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose} >
                                    <Button variant='solid' color='neutral' startIcon={<LogoutIcon fontSize='large' />}>Logout</Button>
                                </MenuItem>
                            </Stack>


                        </Menu>
                    </Box>

                    {/* logo */}
                    <Box flex={1} pr={3}>
                        <Typography variant='h5' align='center' sx={{
                            // backgroundColor: 'blue',
                            // width:'500px',
                            justifyContent: "center",
                        }} >
                            Logo
                        </Typography>
                    </Box>

                    <Box className={matches ? "" : classes.hide} >
                        <NotificationShow />
                    </Box>

                </Stack>
            </Grid>

            <Grid item xs={12} lg={6} sx={{
                display: { xs: "none", lg: "block" },
                // backgroundColor:"red"
            }}>
                <Grid item xs={12} sx={{ display: 'flex' }} justifyContent='center' >
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


            <Grid item xs={12} lg={3} sx={{
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