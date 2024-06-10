import React from 'react';
import logoSvg from '../assets/logo.svg';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Navbar.css"



const Navbar = () => {
    return (
        <div className='container'>
            <AppBar position="static">
                <Toolbar className="header">
                    <div >
                    <img src={logoSvg} alt="Logo" className="logo"/>
                    </div>
                    <Button className="customButton" component={Link} to="/">
                        Book List
                    </Button>
                    <Button className="customButton" component={Link} to="/reading-list">
                        Reading List
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
