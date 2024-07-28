import React from 'react';
import { Box as BoxMui, Typography as Typ, LinearProgress } from '@mui/material';
import { Box as BoxChakra, Image, Grid } from '@chakra-ui/react';
import './MySkills.css';
import skillIcon1 from '../image/skillIcon1.png';
import skillIcon2 from '../image/skillIcon2.png';
import skillIcon3 from '../image/skillIcon3.png';
import skillIcon4 from '../image/skillIcon4.png';
import detalle0 from '../image/detalle3.png'
import detalle10 from '../image/manchaGramde.png'

const skills = [
  { name: 'BASE DE DATOS', level: 60 },
  { name: 'LENGUAJES DE PROGRAMACIÓN', level: 90 },
  { name: 'DISEÑO WEB', level: 70 },
];

const skillIcons = [
  { name: 'SQL', icon: skillIcon1 },
  { name: 'JAVA', icon: skillIcon2 },
  { name: 'CSS', icon: skillIcon3 },
  { name: 'Python', icon: skillIcon4 },
];

const MySkills = () => {
  return (
    <BoxMui className="my-skills-section">
      <img src={detalle0} alt="Detalle0" className='manchas detalle10'/>
      
      <BoxMui className="my-skills-content">
        <Typ variant="h4" className="skills-title">
        Que Incluyen Mis Habilidades De Software
        </Typ>
        <Typ variant="body1" className="skills-description">
        Cada historia que contamos, cada marca que construimos y cada interacción que creamos no solo debe verse hermosa, sino también resonar profundamente.
        </Typ>
        <BoxMui className="skills-list">
          {skills.map(skill => (
            <BoxMui key={skill.name} className="skill-item">
              <Typ variant="body2" sx={{fontFamily:'font-family: "Roboto", sans-serif', fontWeight:600, fontSize:'13px', marginBottom:'-10px', marginTop:'10px'}}>{skill.name}</Typ>
              <Typ variant="body2" sx={{marginLeft: '430px', fontFamily:'IBM Plex Mono, monospace'}}>{`${skill.level}%`}</Typ>
              <LinearProgress variant="determinate" value={skill.level} className="skill-progress" sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#FFD700' }
              , height:'10px'}}/>
            </BoxMui>
          ))}
        </BoxMui>
      </BoxMui>
      <BoxChakra className="skill-icons">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {skillIcons.map(skill => (
            <BoxChakra key={skill.name} className="skill-icon-container" textAlign="center">
              <Image src={skill.icon} alt={skill.name} className="skill-icon" boxSize="50px" />
              <Typ variant="body2" className="skill-icon-name">{skill.name}</Typ>
            </BoxChakra>
          ))}
        </Grid>
      </BoxChakra>
      <img src={detalle10} alt="Detalle20" className='manchas detalle20'/>
    </BoxMui>
  );
};

export default MySkills;
