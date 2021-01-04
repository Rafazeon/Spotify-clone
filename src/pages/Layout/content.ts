import { MenuProps } from './interfaces';

export const menu: MenuProps[] = [
    {
        id: 1,
        color: '#fff',
        name: 'Player',
        link: '/player',
        hover: '#1DB954',
    },
    {
        id: 2,
        color: '#fff',
        name: 'Premium',
        hover: '#1DB954',
    },
    {
        id: 3,
        color: '#fff',
        name: 'Suporte',
        hover: '#1DB954',
    },
    {
        id: 4,
        color: '#fff',
        name: 'Baixar',
        hover: '#1DB954',
    },

    {
        separator: true,
    },

    {
        id: 5,
        color: '#d9dadc',
        name: 'Inscrever-se',
        hover: '#1DB954',
    },
    {
        id: 6,
        color: '#d9dadc',
        name: 'Entrar',
        hover: '#1DB954',
    },
];
