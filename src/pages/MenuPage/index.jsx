import React from 'react';
import { Flex } from '@chakra-ui/core'
import './menupage.css';
import { getGuilds, getUserDetails } from '../../utils/api'
import { GuildMenuContainer } from "../../components";


export function MenuPage({
    history, 
}) {


    const [guilds, setGuilds] = React.useState({})
    
    
    const [ user, setUser] = React.useState( null );
    const [loading, setLoading ] = React.useState(true);
    React.useEffect( () => {
        getUserDetails()
        .then(({data}) => {
            console.log(data);
            setUser( data );
            return getGuilds();
        }).then(({ data }) => {
            setGuilds(data);
            setLoading( false );
        }).catch( (err ) => {
            history.push( '/' );
            setLoading( false );
        });
    }, [])
    return !loading && (
        <Flex className="menu-page-root">
            <GuildMenuContainer history={history} guilds={ guilds } />
        </Flex>
    )
}