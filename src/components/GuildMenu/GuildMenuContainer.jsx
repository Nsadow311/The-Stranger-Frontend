import React from 'react';
import { Flex } from '@chakra-ui/core';
import { GuildMenuItem } from './GuildMenuItem';
import './index.css';
import { GuildSetup } from './GuildSetup';

export const GuildMenuContainer = ({
     guilds,
     history,
}) => {
    
    return (
        <Flex className="guild-menu-container">
            {guilds.included.map((guild) => (
                <GuildMenuItem
                key={guild.id}
                history={history}
                guilds={guild} />
            ))}
            <Flex>
            {guilds.excluded.map((guild) => (
                <GuildSetup
                key={guild.id}
                history={history}
                guilds={guild} />
            ))}
            </Flex>
        </Flex>
    )
};