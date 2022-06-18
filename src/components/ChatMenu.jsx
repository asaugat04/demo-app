import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

// icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EditIcon from '@mui/icons-material/Edit';
import { Stack } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


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



  return (
    <Stack direction='row' justify='space-between' fullWidth='100%' >
      <Stack direction='row' gap={2} alignItems='center'>
        <Avatar></Avatar>
        <Typography variant='h5' fontWeight='bolder' pt={1} >
          Chats
        </Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <MoreHorizIcon className={classes.lightCircularBack} />
        <VideoCallIcon className={classes.lightCircularBack}/>
        <EditIcon className={classes.lightCircularBack}/>
      </Stack>
    </Stack>
  );
};
export default ChatMenu;
