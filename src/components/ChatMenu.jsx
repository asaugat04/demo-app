import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

// icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EditIcon from '@mui/icons-material/Edit';
import { Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import Cmenu from './Cmenu';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const chatMenuItems=

const useStyles = makeStyles({
  lightCircularBack: {
    background: "rgb(220, 220, 220)",
    borderRadius: "50%",
    padding: "7px",
    color: "black"
  },

});



const ChatMenu = () => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget)
  }


  const handleClose = () => {
    setAnchorEl(null)
  }

  const props = {
    open: open,
    handleClose: handleClose,
    top: 110,
    left: 75,
    menuItems: ['Profile', 'My account', 'Logout']
  }
  return (
    <Stack direction='row' sx={{
      justifyContent: "space-between",
      padding: "0 20px"
    }} >
      <Stack direction='row' gap={2} alignItems='center'>
        <Avatar onClick={handleAvatarClick} ></Avatar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={open}
          open={open}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 115, left: 75 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose} >Profile</MenuItem>
          <MenuItem onClick={handleClose} >My account</MenuItem>
          <MenuItem onClick={handleClose} >Logout</MenuItem>



        </Menu>
        <Typography variant='h5' fontWeight='bolder' pt={1} >
          Chats
        </Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <MoreHorizIcon className={classes.lightCircularBack} />
        <VideoCallIcon className={classes.lightCircularBack} />
        <EditIcon className={classes.lightCircularBack} />
      </Stack>
    </Stack>
  );
};
export default ChatMenu;
