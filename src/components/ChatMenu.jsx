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
    <AppBar position="static" sx={{
      backgroundColor: "transparent",
      boxShadow: "0",
      // borderRight:"1px solid black",
      padding:"0",
    }}>
      <Container maxWidth="sm">
        <Toolbar disableGutters sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "300px",
          
          // border:"2px solid yellow",
          
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
            <Typography variant="h5" ml={1} pt={1} sx={{
              fontWeight: "bolder",
              color: "black"
            }}>
              Chats
            </Typography>
          </Box>

          <Box sx={{
            display:"flex",
            // border:"2px solid black",
            justifyContent:"flex-end"
          }} >
            <Tooltip title="Open settings" >
              <IconButton onClick={handleOpenUserMenu}  sx={{ pr: 0.2, pl:2 }}>
                <MoreHorizIcon className={classes.lightCircularBack}  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Video call">
              <IconButton  sx={{ pr: 0.2 }}>
                <VideoCallIcon className={classes.lightCircularBack}  />
              </IconButton>
            </Tooltip>
            <Tooltip title="Video call">
              <IconButton  sx={{ pr: 0 }}>
                <EditIcon className={classes.lightCircularBack}  />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ChatMenu;
