import * as React from 'react'
import { useContext, useState } from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const BodyMiddle = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    return (
        <Container fluid sx={{
            border: "2px solid"
        }}>
            <AppBar position="static" sx={{
                backgroundColor: "transparent",
                boxShadow: "0"
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        minWidth: "200px",
                    }}>





                        <Box sx={{
                            flexGrow: 0,
                            display: "flex"
                        }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Box variant="h5" ml={1} pt={1}>
                                <Typography  sx={{
                                    fontWeight: "bolder",
                                    color: "black"
                                }}>
                                    Item Tittle

                                </Typography>
                                <Typography sx={{
                                    color:"black"
                                }}>
                                    Name
                                </Typography>
                            </Box>
                        </Box>

                        <Box >
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <MoreHorizIcon sx={{
                                        background: "rgb(220, 220, 220)",
                                        borderRadius: "50%",
                                        padding: "7px",
                                        color: "black"
                                    }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Container>


    )
}

export default BodyMiddle