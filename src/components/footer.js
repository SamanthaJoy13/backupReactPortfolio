import React from 'react';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon } from '@mui/icons-material';

const FooterContainer = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px', 
  background: 'transparent', 
});

// Styled component for the GitHub icon link
const StyledGitHubLink = styled('a')({
  color: '#A1A1A1',
  textDecoration: 'none',
  '&:hover': {
    color: '#685B56',
  },
});

function Footer() {
  return (
    <FooterContainer>
      <StyledGitHubLink href="https://github.com/SamanthaJoy13" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </StyledGitHubLink>
    </FooterContainer>
  );
}

export default Footer;