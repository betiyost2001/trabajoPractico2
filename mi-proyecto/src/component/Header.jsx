import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import myImage from '../image/icono.png'

import './Header.css';  

const Header = () => {
    return (
        <div class="root" >
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ color: 'black' }} >
                    <div className="logo">
                        <img src={myImage} className='imagen' alt="icon" style={{ width: 150, height: 150 }} />
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="h5" sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black'}} >
                            BETINA
                        </Typography>
                    </div>
                    <div className="navLinks">
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black' }}  className="linkButton MuiButton-label" variant="text" fontSize="10">Home</Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800 ,textTransform: 'none', color: 'black' }} className="linkButton" variant="text" fontSize="10">About</Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black' }} className="linkButton" variant="text" fontSize="10">Pages</Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black' }} className="linkButton" variant="text" fontSize="10">Portfolio</Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black' }} className="linkButton" variant="text" fontSize="10">Shop</Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black' }} className="linkButton" variant="text" fontSize="10">Contacts</Button>
                    </div>
                        <Button><XIcon sx={{ fontSize: 15 }}></XIcon></Button>
                        <Button><InstagramIcon sx={{ fontSize: 15 }}></InstagramIcon></Button>
                        <Button><GitHubIcon sx={{ fontSize: 15 }}></GitHubIcon></Button>
                    <Button variant="contained" color="secondary">Contact Me</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
