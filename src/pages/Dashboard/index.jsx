import React from 'react';
import { Flex, Text, Switch, Box, Icon } from '@chakra-ui/core';
import { FiInfo, FiSettings } from "react-icons/fi";
import './dashboard.css';
import { getUserDetails } from '../../utils/api'

export function DashboardPage({
    history,
    match,
}) {
    const [ user, setUser] = React.useState( null );
    const [loading, setLoading ] = React.useState(true);
    React.useEffect( () => {
        getUserDetails()
        .then(({data}) => {
            console.log(data);
            setUser( data );
            setLoading( false );
        }).catch( (err ) => {
            history.push( '/' );
            setLoading( false );
        });
    }, [])
    return !loading && (
        <div className='dashboard-root'>
            <Flex className='dashboard-card-container'>
                <Flex 
                    onClick={() => history.push(`/dashboard/${match.params.id}/guild`)}
                    className='card-item'>
                <Box
                    as={FiSettings}
                    fontSize="64px"
                    color="white"
                />
                <Box>
                    <Text className="card-main-text">Guild</Text>
                    <Text className="card-main-text">Configuration</Text>
                </Box>
                </Flex>
                <Flex 
                    onClick={() => history.push(`/dashboard/${match.params.id}/moderation`)}
                    className='card-item'>
                <Box
                    as={FiSettings}
                    fontSize="64px"
                    color="white"
                />
                <Box>
                    <Text className="card-main-text">Moderation</Text>
                </Box>
            </Flex>
          </Flex>
       </div>
  )
}