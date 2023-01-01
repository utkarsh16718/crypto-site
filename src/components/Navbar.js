import React from 'react'

import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (

        <div className='nav'>
           <div className='title'>
            Crypto Trader
           </div>
           <div className='logo'>
            <SearchIcon/>  
            <MenuIcon/>
           </div>

        </div>

    )
}

export default Navbar
