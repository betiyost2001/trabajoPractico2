import React from 'react';
import { Box as BoxMui, Typography as Typ, LinearProgress } from '@mui/material';
import { Box as BoxChakra, Image, Grid } from '@chakra-ui/react';
import './MySkills.css';
import skillIcon1 from '../image/skillIcon1.png';
import skillIcon2 from '../image/skillIcon2.png';
import skillIcon3 from '../image/skillIcon3.png';
import skillIcon4 from '../image/skillIcon4.png';

const skills = [
  { name: 'Photoshop', level: 80 },
  { name: 'Illustrator', level: 90 },
  { name: 'Sketch', level: 70 },
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
      <BoxMui className="my-skills-content">
        <Typ variant="h4" className="skills-title">
        Que Incluyen Mis Habilidades De Software
        </Typ>
        <Typ variant="body1" className="skills-description">
          These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.
        </Typ>
        <BoxMui className="skills-list">
          {skills.map(skill => (
            <BoxMui key={skill.name} className="skill-item">
              <Typ variant="body2" className="skill-name">{skill.name}</Typ>
              <LinearProgress variant="determinate" value={skill.level} className="skill-progress" />
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
    </BoxMui>
  );
};

export default MySkills;
