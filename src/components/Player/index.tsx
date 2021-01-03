import React, { useState } from 'react';
import * as M from '@material-ui/core';
import Header from './Header';

import Content from './Content';

import Menu from './Menu';

import Control from './Control';

import * as S from './styles';

import { albums } from './mocks/content';

const Player: React.FC = () => {
    const [songs, _] = useState(albums);
    return (
        <>
            <S.Container>
                <Menu />
                <S.Content>
                    <Header />
                    <S.TitleContent>
                        <S.Title>Atalhos</S.Title>
                        <S.SubTitle>Ver Tudo</S.SubTitle>
                    </S.TitleContent>
                    <M.Grid container>
                        {songs.map((song) => (
                            <Content
                                key={song.id}
                                image={song.image}
                                title={song.title}
                                description={song.description}
                            />
                        ))}
                    </M.Grid>
                </S.Content>
            </S.Container>
            <S.Player>
                <Control />
            </S.Player>
        </>
    );
};

export default Player;
