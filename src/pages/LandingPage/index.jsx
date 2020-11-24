import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/core'
import './landingpage.css';
export function LandingPage(props) {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    return (
     <div className="landing-root">
         <Box className="main-box">
             <Heading className="main-title">The Stranger</Heading>
             <Text className="main-description">A Multipurpose Discord Bot</Text>
             <Button
              onClick={login}
              className='main-btn'>
              GET STARTED</Button>
         </Box>
     </div>
    );
}