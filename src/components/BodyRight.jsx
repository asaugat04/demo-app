import React from 'react'

import { useContext,useState } from "react";

import Grid from '@mui/material/Grid'

const BodyRight = ()=>{



    return(
               <Grid container spacing={0} direction="column" sx={{
                borderLeft:"1px solid rgb(224, 224, 224)",
                height:"70vh",
                padding:"20px"
               }} >
                <Grid item xs={12}>
                    advertisement
                </Grid>
               </Grid>
    )
}

export default BodyRight