import React from 'react'

import { useContext, useState } from "react";
import Grid from "@mui/material/Grid"
import MenuIcon from '@mui/icons-material/Menu';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Typography } from '@mui/material';
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


const locations = ['ktm', 'pkh', 'bkt']
const categories = ['electronics', 'mobiles', 'sports', 'music']
const languages = ['eng', 'nep']

const Head = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );



    return (

        <Grid container spacing={0} xs={12} mt={3}  >
            <Grid item xs={12} md={3} p={2}  >
                <MenuIcon fontSize='large' /> LOGO
            </Grid>
            <Grid container xs={12} md={6} sx={{
                display:{xs:"none",md:"block"}
            }}  >
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
                    <SystemUpdateAltIcon fontSize='large' />
                    <Typography variant='h5' sx={{}} pt={1} ml={1} >Download The App</Typography>
                </Grid>
                <Grid container item xs={12} m={1} sx={{

                }} >
                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}  >
                        <LocationOnIcon />
                        <BasicSelect datas={locations} />
                    </Grid>
                    <Grid container item xs={9} sx={{
                        display: "flex",
                        alignItems: "center",
                        // flexGrow:3,
                        padding: "0 10px 0 10px",
                        justifyContent: "center"
                    }} >
                        <Grid item xs={5}   >
                            <BasicSelect datas={categories} />
                        </Grid>
                        <Grid item xs={7} p={1} sx={{
                            backgroundColor: "rgb(224, 224, 224)",
                            borderRadius: "20px",
                            display: "flex",
                            alignItems: "center"
                        }} >

                            <InputBase fullWidth={true} required={true} placeholder="search products" sx={{

                            }} />
                            <SearchIcon sx={{ color: "gray" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={3} sx={{
                display:{xs:"none",md:"block"}
            }}  >
                <Grid item xs={12} ml={5} >
                    <BasicSelect datas={languages} />
                    <NotificationShow />
                </Grid>
                <Grid container item xs={12} alignItems='center' ml={3} >
                    <Grid item xs={6}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle fontSize='large' />
                        </IconButton>
                        login/register

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' sx={{
                            backgroundColor:"yellow",
                            maxWidth:"fit-content",
                            padding:"10px 10px 8px 10px",
                            border:"2px solid black",
                            borderRadius:"8px",
                            fontWeight:"bolder"
                        }} >
                            Post Free Ad
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {renderMenu}
        </Grid>


    )
}


export default Head