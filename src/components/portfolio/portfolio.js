import React from 'react';
import { Typography, Paper, Box, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import jonsiesImg from './jonesies.png';
import chirperImg from './chirper.png';
import notesImg from './notes.png';
import workDayImg from './workDay.png';
import portfolioImg from './1stPortfolio.png';
import hotelImg from './project1.png';


const projects = [
  {
    title: 'Jonesies Jewlery',
    src: jonsiesImg,
    repoLink: 'https://github.com/Rockoban420/jonsiesJewlery',
  },
  {
    title: 'Chirper',
    src: chirperImg,
    repoLink: 'https://github.com/zelada5574/SocialMediagang',
    deployLink: 'https://chirperapp.herokuapp.com/',
  },
  {
    title: 'Note Taking App',
    src: notesImg,
    repoLink: 'https://github.com/SamanthaJoy13/takeNotes',
    deployLink: 'https://notetakerr-f5dc5f9cb574.herokuapp.com/',
  },
  {
    title: 'Work Day Scheduler',
    src: workDayImg,
    repoLink: 'https://github.com/SamanthaJoy13/workDayScheduler',
    deployLink: 'https://samanthajoy13.github.io/workDayScheduler/',
  },
  {
    title: 'First Portfolio',
    src: portfolioImg,
    repoLink: 'https://github.com/SamanthaJoy13/personalPortfolio',
    deployLink: 'https://samanthajoy13.github.io/personalPortfolio/',
  },
  {
    title: 'So Youre Looking for a Hotel?',
    src: hotelImg,
    repoLink: 'https://github.com/SamanthaJoy13/so_youre_looking_for_a_hotel',
    deployLink: 'https://samanthajoy13.github.io/so_youre_looking_for_a_hotel/',
  },
];

function Portfolio() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h3" component="div" sx={{ mb: 2, fontFamily: 'serif', color: '#A1A1A1', textAlign: 'center' }}>
          Portfolio
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#EAEAEA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#655A44',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Use anchor tag to open in a new page */}
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="subtitle1" component="div" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 1 }}>
                      {project.title}
                    </Typography>
                  </a>
                  <IconButton href={project.repoLink} target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit' }}>
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default Portfolio;