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
    sent: {
        backgroundColor: "rgb(123, 169, 255) ",

    },

})




const MessageSent = () => {

    const classes = useStyles()

    return (
        <ListItem sx={{
            justifyContent: "flex-end"
        }} >
            <ListItemText className={classes.message + " " + classes.sent} >laskdjflaksdjflk</ListItemText>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
        </ListItem>
    )
}


export default MessageSent