import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import "./Header.css";
import ForumIcon from '@material-ui/icons/Forum';

function Header(){
    return( 
    <div className='header'> 
        <PersonIcon className='header__icon' fontSize="large"/>
        <MovieFilterIcon color="secondary" className='header__icon' fontSize="large"/>
        <ForumIcon className='header__icon' fontSize="large"/>
    </div>
    
    )
}

export default Header