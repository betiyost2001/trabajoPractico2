import React, { useState } from 'react';
import { Container, Box, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import './portfolio.css';
import image1 from '../../image/image1.png';
import image2 from '../../image/image2.png';
import './responsivePortfolio.css'

const projectsData = [
    { id: 1, category: 'Diseño Web', image: image1},
    { id: 2, category: 'Diseño Web', image: image2  },
  ];

  const getCountByCategory = (category) => {
    if (category === 'Todo') {
      return projectsData.length;
    }
    return projectsData.filter(project => project.category === category).length;
  };
  
  const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Todo');
  
    const filteredProjects = activeCategory === 'Todo'
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);
  
    return (
      <Container maxW="container.xl" mt={10} mx="auto" px={4} className='contener' >
        <Heading className='conoce' as="h1" size="xl" mb={4} fontFamily="IBM Plex Mono, monospace" marginLeft={20} >Conoce mis proyectos</Heading>
        <Text fontSize="16px" mb={6} fontFamily=" Arial, Helvetica, sans-serif" marginRight={80} color='#8a8989' marginLeft={20} zIndex={3}>
        Soy estudiante, diseñadora de productos y creativa digital en formación. Aunque todavía no cuento con experiencia profesional, mis diseños son realizados con Visual Studio, React, MUI, Chakra, CSS y algunos componentes Java.
        </Text>
        <Box display="flex" mb={3} alignItems="center" marginLeft={20}>
        {['Todo', 'Diseño Web', 'Otro'].map((category) => (
          <Text
            as="span"
            mx={2}
            fontWeight={activeCategory === category ? 'bold' : 'normal'}
            color={activeCategory === category ? 'orange.400' : 'black'}
            cursor="pointer"
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category} {activeCategory === category && `(${getCountByCategory(category)})`}
          </Text>
        ))}
      </Box>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}  >
          {filteredProjects.map(project => (
            <Box key={project.id} className="projectItem" boxShadow="md" display="flex" alignItems="center" justifyContent="center">
              <Image src={project.image} alt={`Imagen N° ${project.id}`} maxWidth="300px" maxHeight="300px" />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    );
  };
export default Portfolio;

