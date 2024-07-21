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
import myImage from '../image/icon2.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css';  

const Header = () => {
    return (
        <div class="root" >
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ color: 'black' }} >
                    <div className="logo">
                        <img src={myImage} className='imagen' alt="icon" style={{ width: 70, height: 70, margin: '0px 10px'}} />
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h5" sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', marginLeft: '-10px', marginRight: '20px', letterSpacing: '1px'}}>
                            BETINA
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                    </div>
                    <div className="navLinks">
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing:'-1px', fontSize:'15px'}}  className="linkButton MuiButton-label" variant="text" fontSize="10">Inicio <KeyboardArrowDownIcon sx={{height:'18px', color: 'grey', '&:hover': {color: 'black',}}}></KeyboardArrowDownIcon></Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing:'-0.5px', fontSize:'15px' }} className="linkButton" variant="text">Sobre mi <KeyboardArrowDownIcon sx={{height:'18px', color: 'grey', '&:hover': {color: 'black',}}}></KeyboardArrowDownIcon></Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing:'-0.5px', fontSize:'15px' }} className="linkButton" variant="text" >Portafolio <KeyboardArrowDownIcon sx={{height:'18px', color: 'grey', '&:hover': {color: 'black',}}}></KeyboardArrowDownIcon></Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing:'-0.5px', fontSize:'15px' }} className="linkButton" variant="text">Experiencia <KeyboardArrowDownIcon sx={{height:'18px', color: 'grey', '&:hover': {color: 'black',}}}></KeyboardArrowDownIcon></Button>
                        <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing:'-0.5px', fontSize:'15px'}} className="linkButton" variant="text">Contácto</Button>
                    </div>
                    <div className='botonLinks'>
                        <Button sx={{ margin: '0 -10px' }}><XIcon sx={{ fontSize: 15, color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px'}}></XIcon></Button>
                        <Button sx={{ margin: '0 -10px' }}><InstagramIcon sx={{ fontSize: 15, color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px' }}></InstagramIcon></Button>
                        <Button sx={{ margin: '0 -10px' }}><GitHubIcon sx={{ fontSize: 15, color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px' }}></GitHubIcon></Button>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{margin: '0px 30px'}} />
                    <Button variant="contained" sx={{backgroundColor: 'black', '&:hover': {backgroundColor: 'gold',},  textTransform: 'none', fontWeight: 600}}>Contáctame</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
