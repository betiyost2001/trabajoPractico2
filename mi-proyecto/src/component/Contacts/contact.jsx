import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import { FaPhone,FaTelegramPlane, FaGithub  } from 'react-icons/fa';
import Button  from '@mui/material/Button';
import './contact.css';
import fondo from '../../image/contact-bg.png'
import './responsiveContact.css'

const Contact = () => {
    const handleContactMe = () => {
        window.location.href = 'mailto:yostbetina20@gmail.com?subject=Interesado%20en%20Contratarte&body=Hola%20Betina,%20';
    };

    return (
        <Box className="contact-section" position="relative" py={20} >
            <img src={fondo} alt="" className='fondo'/>
            <Container maxW="container.lg" textAlign="center">
                <Heading as="h2" size="2xl" mb={10} color="white" fontFamily="IBM Plex Mono, monospace" className='habla'>
                    ¡Hablemos!
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0} mb={10} className='boxres'>
                    <Box textAlign="center" className='itm'>
                        <Icon
                            as={FaPhone}
                            backgroundColor='#212121'
                            w={8} h={8} 
                            color='#f9ad07'
                            
                          
                        />
                        <Text fontSize="lg" color="white" fontFamily="IBM Plex Mono, monospace">Teléfono:</Text>
                        <Text fontSize="lg" color="#a2a0a1">+54 299 4123904</Text>
                    </Box>
                    <Box textAlign="center" className='itm'>
                        <Icon
                            as={FaTelegramPlane}
                            backgroundColor='#141414'
                            w={8} h={8} 
                            color='#f9ad07'
                        />
                        <Text fontSize="lg" color="white" fontFamily="IBM Plex Mono, monospace">Correo:</Text>
                        <Text fontSize="lg" color="#a2a0a1">yostbetina20@gmail.com</Text>
                    </Box>
                    <Box textAlign="center" className='itm'>
                        <Icon
                            as={FaGithub }
                            backgroundColor='#141414'
                            w={8} h={8} 
                            color='#f9ad07'
                        />
                        <Text fontSize="lg" color="white" fontFamily="IBM Plex Mono, monospace" >Sígueme:</Text>
                        <Text fontSize="lg" color="#a2a0a1">github.com/betiyost2001</Text>
                    </Box>
                </SimpleGrid>
                <Button variant="contained" onClick={handleContactMe} sx={{backgroundColor: '#ffc13e', '&:hover': {backgroundColor: 'black',},  textTransform: 'none', fontWeight: 600}} className='butres'>Contratáme</Button>
            </Container>
        </Box>
    );
};

export default Contact;
