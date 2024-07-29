import React, { useState } from 'react';
import { Link as ChakraLink, Box } from '@chakra-ui/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import XIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import myImage from '../../image/icon2.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.css';  
import './responsiveHeader.css';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className="root" >
            <AppBar position="fixed" sx={{ backgroundColor: 'white', zIndex: '5'}}>
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
                    <div className="menu-icon" onClick={toggleMobileMenu}>
                        <IconButton edge="start" aria-label="menu">
                            <MenuIcon sx={{color:'blakc', fontSize: '26px'}}></MenuIcon>
                        </IconButton>
                    </div>
                    <div className={`navLinks ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ChakraLink href="#inicio" smooth={true}>
                            <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing: '-1px', fontSize: '15px' }} className="linkButton MuiButton-label" variant="text">Inicio <KeyboardArrowDownIcon sx={{ height: '18px', color: 'grey', '&:hover': { color: 'black', } }}></KeyboardArrowDownIcon></Button>
                        </ChakraLink>
                        <ChakraLink href="#about" smooth={true}>
                            <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing: '-0.5px', fontSize: '15px' }} className="linkButton" variant="text">Sobre mi <KeyboardArrowDownIcon sx={{ height: '18px', color: 'grey', '&:hover': { color: 'black', } }}></KeyboardArrowDownIcon></Button>
                        </ChakraLink>
                        <ChakraLink href="#portfolio" smooth={true}>
                            <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing: '-0.5px', fontSize: '15px' }} className="linkButton" variant="text">Portafolio <KeyboardArrowDownIcon sx={{ height: '18px', color: 'grey', '&:hover': { color: 'black', } }}></KeyboardArrowDownIcon></Button>
                        </ChakraLink>
                        <ChakraLink href="#experience" smooth={true}>
                            <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing: '-0.5px', fontSize: '15px' }} className="linkButton" variant="text">Experiencia <KeyboardArrowDownIcon sx={{ height: '18px', color: 'grey', '&:hover': { color: 'black', } }}></KeyboardArrowDownIcon></Button>
                        </ChakraLink>
                        <ChakraLink href="#contact" smooth={true}>
                            <Button sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, textTransform: 'none', color: 'black', letterSpacing: '-0.5px', fontSize: '15px' }} className="linkButton" variant="text">Contácto</Button>
                        </ChakraLink>
                    </div>
                    <div className='botonLinks'>
            
                        <Button component="a" href="https://www.linkedin.com/in/betina-yost-245ab2265" target="_blank" sx={{ margin: '0 -10px' }}><XIcon sx={{ fontSize: '26px', color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px'}}></XIcon></Button>
                        <Button component="a" href="https://www.instagram.com/betii.y/" target="_blank" sx={{ margin: '0 -10px' }}><InstagramIcon sx={{ fontSize: '26px', color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px' }}></InstagramIcon></Button>
                        <Button component="a" href="https://github.com/betiyost2001/" target="_blank" sx={{ margin: '0 -10px' }}><GitHubIcon sx={{ fontSize: '26px', color: 'black', border: '2px solid #f7f7f7', borderRadius: '100%', padding: '5px' }}></GitHubIcon></Button>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{margin: '0px 30px'}} />
                    <Button variant="contained" sx={{backgroundColor: 'black', '&:hover': {backgroundColor: 'gold',},  textTransform: 'none', fontWeight: 600}}>Contáctame</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
