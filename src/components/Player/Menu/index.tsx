import React from 'react';

import * as S from './styles';

import Header from '../../../pages/Header';

import { menu } from './content';

const Menu: React.FC = () => {
    return (
        <S.Container>
            <Header arr={menu} />
        </S.Container>
    );
};

export default Menu;
