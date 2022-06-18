import React from 'react'
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// const Cmenu = ({open, handleClose, top, left  }) => {
const Cmenu = (props) => {


    console.log(props.menuItems)

    return (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={props.open}
            open={props.open}
            onClose={props.handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: props.top, left: props.left }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            {/* {
                props.menuItems.map(item => {
                    return (
                        <MenuItem onClick={props.handleClose} >{item}</MenuItem>
                        
                        )
                    })
                } */}
                <MenuItem onClick={props.handleClose} >Profile</MenuItem>
                <MenuItem onClick={props.handleClose} >My Account</MenuItem>
                <MenuItem onClick={props.handleClose} >Logout</MenuItem>
                {/* <MenuItem onClick={handleClose} >Profile</MenuItem>
                <MenuItem onClick={handleClose} >My Account</MenuItem>
                <MenuItem onClick={handleClose} >Logout</MenuItem> */}



        </Menu>

    )
}

export default Cmenu