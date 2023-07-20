import React, { useState } from 'react';
import { Typography, Paper, TextField, Button, FormHelperText, Box } from '@mui/material';
import { styled } from '@mui/system';

const ContactForm = styled('form')`
  display: grid;
  gap: 16px;
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!message) setMessageError(true);
      return;
    }

    console.log('Form submitted!');
    
    setName('');
    setEmail('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  return (
    <Box sx={{ p: 2 }}>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h3" component="div" sx={{ mb: 2, fontFamily: 'serif', color: '#A1A1A1', textAlign: 'center' }}>
        Contact
      </Typography>
      <ContactForm onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={messageError}
        />
        <FormHelperText error={true}>
          {nameError && 'Name is required'}
          {emailError && 'Please enter a valid email'}
          {messageError && 'Message is required'}
        </FormHelperText>
        <Button
          color="primary"
          size="medium" // You can use 'small', 'medium', or 'large' for size
          sx={{ backgroundColor: '#A1A1A1', color: 'white', '&:hover': { backgroundColor: '#929292' }, mt: 2, mb: 2 }}
          type="submit"
        >
          Submit
        </Button>
      </ContactForm>
    </Paper>
    </Box>
  );
}

export default Contact;