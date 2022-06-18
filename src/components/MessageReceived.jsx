import React from "react";


import { bottomNavigationActionClasses, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    message: {
        padding: "5px 15px",
        borderRadius: "15px",
        margin: "0 5px 0 5px",
        maxWidth: '280px'
    },

    recieved: {
        backgroundColor: "rgb(224, 224, 224)",
    }
})




const MessageReceived = () => {
    const classes = useStyles()


    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.message + " " + classes.recieved} >laskdjflaksdjflk</ListItemText>
        </ListItem>
    )
}


export default MessageReceived