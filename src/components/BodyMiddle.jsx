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
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { margin } from '@mui/system';
import { bottomNavigationActionClasses, ListItem, Paper } from '@mui/material';
import List from '@mui/material/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    message: {
        padding: "5px 15px",
        borderRadius: "15px",
        margin: "0 5px 0 5px",
        maxWidth:'280px'
    },
    sent: {
        backgroundColor: "rgb(123, 169, 255) ",
    },
    recieved: {
        backgroundColor: "rgb(224, 224, 224)",
    }
})




const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const BodyMiddle = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const classes = useStyles()

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

            // border: "2px solid"


        }}>
            <AppBar position="static" sx={{
                backgroundColor: "transparent",
                boxShadow: "0",
                borderBottom: "2px solid rgb(236, 236, 236)",

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
                                <Typography sx={{
                                    fontWeight: "bolder",
                                    color: "black"
                                }}>
                                    Item Tittle

                                </Typography>
                                <Typography sx={{
                                    color: "black"
                                }}>
                                    Name
                                </Typography>
                            </Box>
                        </Box>

                        <Box >
                            <Tooltip title="Audio call">
                                <IconButton color='primary' sx={{ pr: 0.2 }}>
                                    <CallIcon fontSize='medium' sx={{
                                        borderRadius: "50%",
                                        padding: "7px",
                                        // color: "primary"
                                    }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Video call">
                                <IconButton color='primary' sx={{ pr: 0.2 }}>
                                    <VideocamIcon fontSize='medium' sx={{
                                        borderRadius: "50%",
                                        padding: "7px",
                                        // color: "primary"
                                    }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <MoreHorizIcon sx={{
                                        background: "#42a5f5",
                                        borderRadius: "50%",
                                        padding: "3px",
                                        color: "white"
                                    }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>




            {/* messages */}
            <Paper sx={{
                maxHeight: "200",
                overflow: "auto"
            }}>
                <List>
                    <ListItem >
                        <Avatar></Avatar>
                        <p className={classes.message + " " + classes.recieved} >message received</p>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem >
                        <Avatar></Avatar>
                        <p className={classes.message + " " + classes.recieved} >message received asdhfkjashdfkjhasdkjfhaksjd
                        asdfhaskdhfkasjdhfkjashdfk kdjhasfkjhasd kfaskjdfh aksdf</p>
                    </ListItem>
                    <ListItem >
                        <Avatar></Avatar>
                        <p className={classes.message + " " + classes.recieved} >message received</p>
                    </ListItem>
                    <ListItem >
                        <Avatar></Avatar>
                        <p className={classes.message + " " + classes.recieved} >message received</p>
                    </ListItem>
                    <ListItem >
                        <Avatar></Avatar>
                        <p className={classes.message + " " + classes.recieved} >message received</p>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                    <ListItem sx={{
                        justifyContent: "flex-end"
                    }} >
                        <p className={classes.message + " " + classes.sent} >message sent</p>
                        <Avatar></Avatar>
                    </ListItem>
                </List>

            </Paper>


        </Container>


    )
}

export default BodyMiddle