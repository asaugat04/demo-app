import React from "react";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {



    return (
        <div className="search">
            <SearchIcon sx={{
                color: "gray",
            }} />
            <InputBase placeholder='search messenger' sx={{
                margin: "0 0 0 15px",
            }} />
        </div>
    )
}

export default Search