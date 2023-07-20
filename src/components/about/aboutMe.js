import React from 'react';
import { Typography, Paper, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import MeImage from './Me.jpg';



const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled('img')`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

function AboutMe() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <CenteredContainer>
          <Typography variant="h3" component="div" sx={{ mb: 2, fontFamily: 'serif', color: '#A1A1A1' }}>
            About Me
          </Typography>
          <StyledImage src={MeImage} alt="Profile" />
          <Typography variant="body1" component="div" sx={{ color: '685B56' }}>
            Hello! I'm Samantha Tavares, and I am currently enrolled in a full stack coding bootcamp with UC Berkeley. I have always had a deep passion for front-end development, as it allows me to bring designs to life and create captivating user experiences. I am excited about expanding my coding knowledge and skills, and I look forward to learning more and applying my newfound expertise. Coding is not just a hobby for me; it's a journey of growth and continuous improvement. 
          </Typography>
        </CenteredContainer>
      </Paper>
    </Box>
  );
}

export default AboutMe;