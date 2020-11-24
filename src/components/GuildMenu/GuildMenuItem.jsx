import React from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/core';
import "./index.css";

export const GuildMenuItem = ({
    guilds,
    history,
    
}) => ( 
    <Flex className="guild-menu-item">
        <Flex className="guild-details-wrapper">
          <Text className="guild-text">{guilds.name}</Text>
          <Flex className="btn-container">
            <Button className=" base-btn dashboard-btn"
            onClick={() => { history.push(`/dashboard/${guilds.id}`)}}>Dashboard
            </Button>
            <Button className=" base-btn delete-btn">Delete</Button>
        </Flex>  
        </Flex>
        <Box>
           <Box>
               <Box className="guild-icon"></Box>
           </Box>
        </Box>
        
        
    </Flex>
);