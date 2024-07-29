import React from 'react';
import { Box as BoxMui, Typography as Typ, IconButton } from '@mui/material';
import './AboutMe.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imagen2 from '../../image/mujerSonrie.png'
import mancha from '../../image/mancha2.png'
import detalle1 from '../../image/detalle1.png'

const AboutMe = () => {
    return (
        <BoxMui className="about-me-section">
            <img src={detalle1} alt="Detalle 1" className='detalle detalle1' />
            <img src={mancha} alt="Detalle 2" className='detalle detalle2' />
            <img src={imagen2} alt="" className='imagenSonrie'/>
            <BoxMui className="about-me-content">
                <Typ variant="h4" className="sub-text" sx={{fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800, fontSize:'28px', transform: 'scaleY(1.2)', marginBottom:'20px'}}>
                    Necesitas un diseño creativo? <br /> Puedo ayudarte!
                </Typ>
                <Typ variant="body1" className="description-text" sx={{color:'#a2a0a1', fontFamily:'Arial, Helvetica, sans-serif'}}>
                Estoy aquí para ayudarte a crear un sitio web que destaque. Además, optimizaré tu sitio para que cargue rápidamente y sea fácil de encontrar en los motores de búsqueda, lo que aumentará tu visibilidad en línea y atraerá más clientes. Estoy comprometida a ofrecerte una solución web personalizada que impulse el éxito de tu negocio. 
                </Typ>
                <Typ variant="body1" className="follow-text" sx={{color:'#a2a0a1', fontFamily:'Arial, Helvetica, sans-serif', marginTop:'20px'}}>
                    ¡Contáctame para comenzar a trabajar juntos en tu proyecto web!
                </Typ>
                <BoxMui className="social-icons">
                    <IconButton href="https://www.instagram.com/betii.y/" target="_blank">
                        <InstagramIcon className="social-icon" />
                    </IconButton>
                    <IconButton href="https://github.com/betiyost2001/" target="_blank">
                        <GitHubIcon className="social-icon" />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/betina-yost-245ab2265" target="_blank">
                        <LinkedInIcon className="social-icon" />
                    </IconButton>
                </BoxMui>
            </BoxMui>
        </BoxMui>
    );
};

export default AboutMe;
