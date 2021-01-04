import React from 'react';
import Menu from '../Menu';
import Control from '../Control';

import * as S from './styles';

const Layout: React.FC = ({ children }) => {
    return (
        <S.Container>
            <Menu />
            {children}

            <S.Player>
                <Control />
            </S.Player>
        </S.Container>
    );
};

export default Layout;
