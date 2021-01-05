import React from 'react';

import * as F from 'react-icons/fi';
import * as S from './styles';

const Header: React.FC = () => {
    return (
        <S.Container>
            <S.Icon>
                <F.FiChevronLeft />
                <F.FiChevronRight />
            </S.Icon>

            <S.Profile>
                <S.Btn variant="contained">Faça Upgrade</S.Btn>
                <span>
                    <div>
                        <F.FiUser />
                    </div>
                    <p>rafazeon</p>
                    <F.FiChevronDown />
                </span>
            </S.Profile>
        </S.Container>
    );
};

export default Header;
