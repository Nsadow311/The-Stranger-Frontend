export const GUEST_ROUTES = [
    {
        name: 'Login',
        url: 'https://localhost:7000/api/auth/discord/login'
    }
];

export const AUTHORIZED_ROUTES = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        authorized: true,
        
    },
    {
        name: 'Settings',
        path: '/settings',
        authorized: true,
    }
];

export const ADMINISTRATOR_ROUTES = [
    
    {
            name: 'Administrator',
            path: '/administrator',
            authorized: true,
            admin: true,
    }

]