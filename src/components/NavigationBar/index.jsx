import React from 'react';
import { Flex, Heading, IconButton} from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';
import './navigationbar.css';

export const NavigationBar = ({
    onOpen
}) => {
    return (
        <Flex className="nav-flex-bar">
        <Heading className="nav-heading" color="white">
            The Stranger
        </Heading>
        <IconButton 
            className="menu-btn"
            onClick={onOpen}
            icon={FiMenu} />
        </Flex> 
    );
}







