import React from "react"

import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


const NotificationShow = () => {
    return (
        <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="primary"
        >
            <Badge badgeContent={17} color="error"  >
                <NotificationsIcon fontSize='md' />
            </Badge>
        </IconButton>
    )
}


export default NotificationShow