import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, IconButton, Button, Icon } from '@chakra-ui/react';
import { FaPhone,FaTelegramPlane, FaGithub  } from 'react-icons/fa';
import './contact.css';
import fondo from '../../image/contact-bg.png'

const Contact = () => {
    return (
        <Box className="contact-section" position="relative" py={20} >
            <img src={fondo} alt="" className='fondo'/>
            <Container maxW="container.lg" textAlign="center">
                <Heading as="h2" size="2xl" mb={10} color="white" fontFamily="IBM Plex Mono, monospace">
                    ¡Hablemos!
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0} mb={10}>
                    <Box textAlign="center">
                        <Icon
                            as={FaPhone}
                            backgroundColor='#212121'
                            w={8} h={8} 
                            color='#f9ad07'
                          
                        />
                        <Text fontSize="lg" color="white" fontFamily="IBM Plex Mono, monospace">Teléfono:</Text>
                        <Text fontSize="lg" color="#a2a0a1">+54 299 4123904</Text>
                    </Box>
                    <Box textAlign="center">
                        <Icon
                            as={FaTelegramPlane}
                            backgroundColor='#141414'
                            w={8} h={8} 
                            color='#f9ad07'
                        />
                        <Text fontSize="lg" color="white" fontFamily="IBM Plex Mono, monospace">Correo:</Text>
                        <Text fontSize="lg" color="#a2a0a1">yostbetina20@gmail.com</Text>
                    </Box>
                    <Box textAlign="center">
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
                <Button
                    colorScheme="yellow"
                    size="lg"
                    mt={4}
                >
                    Contrátame
                </Button>
            </Container>
        </Box>
    );
};

export default Contact;
