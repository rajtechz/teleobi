import React from 'react';
import { Button, Typography, ThemeProvider, createTheme } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25D366',
    },
  },
  typography: {
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
  },
});

function Boatlist() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h3" color="primary" className="mt-4">
          You have not connected yet
        </Typography>

        <div className="flex mt-4">
          <div>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s',
                }}
                startIcon={<WhatsApp style={{ marginRight: '10px' }} />}
              >
                Connect with WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Boatlist;
