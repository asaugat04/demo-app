import * as React from 'react'
import { useContext, useState } from 'react'
import { appContext } from '../appContext'
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
import { bottomNavigationActionClasses, Button, ListItem, ListItemAvatar, ListItemText, Paper, Stack } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';
import MessageReceived from './MessageReceived';
import MessageSent from './MessageSent';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';

import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const useStyles = makeStyles({
    icons: {
        backgroundColor: "skyblue",
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
})

const BodyMiddle = () => {

    const { clicked } = useContext(appContext)


    const [message, setMessage] = useState("")

    const handleOnChange = (e) => {
        setMessage(e.currentTarget.value)
    }



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
        <Grid container xs={12} direction='column' sx={{
            display: { xs: clicked ? 'block' : 'none', md: 'block' }
        }} >
            <Grid item xs={12}>
                <AppBar position="static" sx={{
                    backgroundColor: "transparent",
                    boxShadow: "0",
                    // paddingRight:'5px'

                }}>

                    <Container >
                        <Toolbar disableGutters sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            minWidth: "200px",
                        }}>
                            {/* {clicked ? "<Box>< Button p={0} m={0} ><ArrowBackIosIcon variant='contained' color='red' /></Button></Box>" : ""} */}





                            <Box sx={{
                                flexGrow: 1,
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
            </Grid >


            <Grid item xs={12}>            <Divider /></Grid>
            {/* **************************************************************************** */}
            {/* messages */}
            <Grid item xs={12}>
                <Box component='div' sx={{
                    overflowY: "auto",
                    height: "69vh"
                }} >

                    <List>
                        <MessageReceived />
                        <MessageSent />
                        <MessageSent />
                        <MessageReceived />
                        <MessageReceived />
                        <MessageSent />
                        <MessageReceived />
                        <MessageSent />
                        <MessageSent />
                        <MessageReceived />
                        <MessageReceived />
                        <MessageSent />
                        <MessageReceived />
                    </List >


                </Box>

            </Grid>

            <Grid container spacing={0} xs={12} sx={{
                // border: "2px solid blue",
                margin: "5px 0",
                padding: "10px",

            }} >

                <Stack direction='row' flex={1} spacing={0} justifyContent='space-between' sx={{ backgroundColor: "" }} >
                    <Box component='div' >
                        <Stack direction='row' gap={0.2}>
                            <Box className={classes.icons} ><AddIcon fontSize='small' /></Box>
                            <Box className={classes.icons} sx={{display:{xs:"none",sm:"block"}}} ><InsertPhotoIcon fontSize='small' /></Box>
                            <Box className={classes.icons} sx={{display:{xs:"none",sm:"block"}}}><FileOpenIcon fontSize='small' /></Box>
                            <Box className={classes.icons} sx={{display:{xs:"none",sm:"block"}}}><GifBoxIcon fontSize='small' /></Box>
                        </Stack>
                    </Box>
                    <Box component='div' flex={1} sx={{ backgroundColor: "" }} >
                        {/* <Button sx={{ backgroundColor: "rgb(224, 224, 224)", borderRadius: "20px" }} disableFocusRipple endIcon={<EmojiEmotionsIcon fontSize='large' />}><InputBase required fullWidth /></Button> */}
                        <Stack direction='row' alignItems='center' sx={{
                            backgroundColor: "rgb(224, 224, 224)",
                            borderRadius: "20px",
                            padding: "0 10px"
                        }}>
                            <InputBase value={message} onChange={handleOnChange} required fullWidth sx={{

                                padding: "5px 10px",

                            }} placeholder='message' />
                            <EmojiEmotionsIcon />
                        </Stack>

                    </Box>

                    <Box className={classes.icons} >
                        {message.length > 0 ? <SendIcon /> : <ThumbUpIcon fontSize='small' />}
                    </Box>
                </Stack>

            </Grid>

        </Grid >


    )
}

export default BodyMiddle