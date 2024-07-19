import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';  

const Header = () => {
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <div className="logo">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            NIMBUS
                        </Typography>
                    </div>
                    <div className="navLinks">
                        <Button color="inherit" className="linkButton">Home</Button>
                        <Button color="inherit" className="linkButton">About</Button>
                        <Button color="inherit" className="linkButton">Pages</Button>
                        <Button color="inherit" className="linkButton">Portfolio</Button>
                        <Button color="inherit" className="linkButton">Shop</Button>
                        <Button color="inherit" className="linkButton">Contacts</Button>
                    </div>
                    <Button variant="contained" color="secondary">Contact Me</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
