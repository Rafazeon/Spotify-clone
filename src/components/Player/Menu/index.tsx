import React from 'react';

import * as S from './styles';

import LogoImg from '../../../assets/logo.png';

const Menu: React.FC = () => {
    return (
        <S.Container>
            <img src={LogoImg} alt="Logo" />
            <ul>
                <li>Início</li>
                <li>Buscar</li>
                <li>Sua Biblioteca</li>
            </ul>
            <p>Playlists</p>
            <ul>
                <li>Criar Playlists</li>
                <li>Músicas Curtidas</li>
            </ul>
        </S.Container>
    )
}

export default Menu