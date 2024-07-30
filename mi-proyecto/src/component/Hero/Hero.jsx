import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Hero.css'; 
import myImage from '../../image/mancha.png'
import myImage2 from '../../image/fondo.png'
import './responsiveHero.css'

const Hero = () => {
    const handleContactMe = () => {
        // Example: Open a mail client
        window.location.href = 'mailto:yostbetina20@gmail.com?subject=Interesado%20en%20Contratarte&body=Hola%20Betina,%20';
    };
    return (
        <Box className="hero">
            <Box sx={{ position: 'absolute', width: '100%', height: '100vh' }}>
                <Box className="content">
                    <img src={myImage2} alt="Betina" className="profile-image" />
                </Box>
            </Box>
            
            <Box className="text-content">
                <Typography variant="h3" sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, wordSpacing:'-10px', fontSize:'3rem'}}>
                    Hola! Soy Betina Yost -
                </Typography>
                <Typography variant="h3" sx={{ color: '#FFA500', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing:'-2px', wordSpacing:'-12px' }}>
                    Est. de Ingieneria en Sistemas
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '20px', color:'#9798b1',  width: '90%' }} className='texto1'>
                Estudio Ingeniería en Sistemas de Información en la UTN, cuento con experiencia en Python, HTML, CSS junto con conocimientos básicos en Java y SQL.
                </Typography>
                <Box className="contact-info">
                    <Box className="contact-item">
                        <Typography variant="body2" className='texto2' sx={{fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing: '-0.5px', fontSize:'15px' }}>Email:</Typography>
                        <Typography variant="body2" className='texto2' sx={{color: '#9798b1', fontSize:'15px'}}>yostbetina20@gmail.com</Typography>
                    </Box>
                    <Box className="contact-item">
                        <Typography variant="body2" className='texto2' sx={{fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing: '-0.5px', fontSize:'15px' }}>GitHub:</Typography>
                        <Typography variant="body2" className='texto2' sx={{color: '#9798b1', fontSize:'15px'}}>github.com/betiyost2001/</Typography>
                    </Box>
                </Box>
                <Box>
                    <Button variant="contained" className='bot'  sx={{ backgroundColor: '#FFA500', color: 'white', '&:hover': { backgroundColor: '#e59400' },  textTransform: 'none', marginRight: '10px' }}>Descargar CV</Button>
                    <Button variant="contained" className='bot' onClick={handleContactMe} sx= {{backgroundColor: '#000000', color: 'white', '&:hover': { backgroundColor: '#333333' },  textTransform: 'none',marginRight: '10px'}} >Contratame</Button>
                </Box>
            </Box>
            
            <Typography variant="h1" className="background-text" sx={{ color: '#f7f7f7', fontFamily: "Gloria Hallelujah", fontWeight: 800, position:'absolute', left:'3vh'}}>
                Betina
            </Typography>
            <img src={myImage} alt="Stain" className="manchas stain1" />
        </Box>
        
    );
};

export default Hero;
