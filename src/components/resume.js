import React from 'react';
import { Typography, Paper, Box, Link } from '@mui/material';

const listStyles = {
    listStyleType: 'none',
    paddingInlineStart: '0',
  };

function Resume() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h3" component="div" sx={{ mb: 2, fontFamily: 'serif', color: '#A1A1A1', textAlign: 'center' }}>
          Resume
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 1, mb: 1 }}>
        <Typography variant="body1">
            Download my <Link href="https://docs.google.com/document/d/11y2SeZwcUY1lxvvBaYSKrAgkzBG55_pI67v47fRsEfk/edit?usp=sharing" download target="_blank" rel="noopener noreferrer" sx={{ color: '#6A4D44', textDecoration: 'none' }}>resume</Link>.
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'serif', }}>
            Front-end Proficiencies:
          </Typography>
          <ul style={listStyles}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <Typography variant="h6" sx={{ fontFamily: 'serif', }}>
            Back-end Proficiencies:
          </Typography>
          <ul style={listStyles}>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </Box>
      </Paper>
    </Box>
  );
}

export default Resume;