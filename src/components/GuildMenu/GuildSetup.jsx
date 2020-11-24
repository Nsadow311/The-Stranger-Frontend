import React from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/core';
import "./index.css";
const Invite = () => window.location.href = 'https://discord.com/oauth2/authorize?client_id=700695511451303966&scope=bot&permissions=8';
export const GuildSetup = ({
    guilds,
    history,
}) => ( 
    <Flex className="guild-menu-item">
        <Flex className="guild-details-wrapper">
          <Text className="guild-text">{guilds.name}</Text>
          <Flex className="btn-setup">
            <Button className=" setup dashboard-btn"
            onClick={Invite}>Setup "The Stranger"
            </Button>
        </Flex>  
        </Flex>
        <Box>
           <Box>
               <Box className="guild-icon"></Box>
           </Box>
        </Box>
        
        
    </Flex>
);