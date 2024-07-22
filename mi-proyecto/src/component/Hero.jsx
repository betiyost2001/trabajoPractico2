import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Hero.css'; 
import myImage from '../image/mancha.png'
import myImage2 from '../image/fondo.png'

const Hero = () => {
    return (
        <Box className="hero">
            <Box sx={{ position: 'absolute', width: '100%', height: '100vh' }}>
                <Box className="content">
                    <img src={myImage2} alt="Betina" className="profile-image" />
                </Box>
            </Box>
            
            <Box className="text-content">
                <Typography variant="h3" sx={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, wordSpacing:'-10px'}}>
                    Hola! Soy Betina Yost -
                </Typography>
                <Typography variant="h3" sx={{ color: '#FFA500', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing:'-2px', wordSpacing:'-12px' }}>
                    Est. de Ingieneria en Sistemas
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '20px', color:'#9798b1',  width: '90%' }}>
                Estudio Ingeniería en Sistemas de Información en la UTN, cuento con experiencia en Python, HTML, CSS junto con conocimientos básicos en Java y SQL.
                </Typography>
                <Box className="contact-info">
                    <Box className="contact-item">
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing: '-0.5px', fontSize:'15px' }}>Email:</Typography>
                        <Typography variant="body2" sx={{color: '#9798b1', fontSize:'15px'}}>yostbetina20@gmail.com</Typography>
                    </Box>
                    <Box className="contact-item">
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, letterSpacing: '-0.5px', fontSize:'15px' }}>Behance:</Typography>
                        <Typography variant="body2" sx={{color: '#9798b1', fontSize:'15px'}}>behance.net/nimbus2000</Typography>
                    </Box>
                </Box>
                <Box>
                    <Button variant="contained"  sx={{ backgroundColor: '#FFA500', color: 'white', marginRight: '10px', '&:hover': { backgroundColor: '#e59400' },  textTransform: 'none',marginRight: '10px'  }}>Descargar CV</Button>
                    <Button variant="contained" sx= {{backgroundColor: '#000000', color: 'white', '&:hover': { backgroundColor: '#333333' },  textTransform: 'none',marginRight: '10px'}} >Contratame</Button>
                </Box>
            </Box>
            
            <Typography variant="h1" className="background-text" sx={{ color: '#f7f7f7', fontFamily: "Gloria Hallelujah", fontWeight: 800, position:'absolute'}}>
                Betina
            </Typography>
            <img src={myImage} alt="Stain" className="manchas stain1" />
        </Box>
        
    );
};

export default Hero;
