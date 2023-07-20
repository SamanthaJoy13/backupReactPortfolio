import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-image: url('https://img.freepik.com/free-photo/gold-monstera-leaf-beige-banner-background_53876-147727.jpg?w=1060&t=st=1689802768~exp=1689803368~hmac=b920183e4574d921ae5f9438ca4721f92de6b595635a81016c5b8a1333f2780c');
  background-size: cover;
  height: 80px;
`;

const StyledToolbar = styled(Toolbar)`
  margin: 0;
  padding: 0;
`;

const StyledName = styled(Typography)`
  font-family: serif;
  color: #655A44;
`;

const StyledButton = styled(Button)`
  color: #A1A1A1;
`;

function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledName variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Samantha Tavares
        </StyledName>
        <StyledButton color="inherit" component={Link} to="/">About Me</StyledButton>
        <StyledButton color="inherit" component={Link} to="/portfolio">Portfolio</StyledButton>
        <StyledButton color="inherit" component={Link} to="/contact">Contact</StyledButton>
        <StyledButton color="inherit" component={Link} to="/resume">Resume</StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;