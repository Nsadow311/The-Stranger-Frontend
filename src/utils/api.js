import axios from 'axios';

export function getUserDetails() {
    return axios.get('https://dastranger.xyz/api/auth', { withCredentials: true })
}


export function getGuilds() {
    return axios.get('https://dastranger.xyz/api/discord/guilds', { withCredentials: true })
}
