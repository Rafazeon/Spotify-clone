import React, { useState } from 'react';
import * as M from '@material-ui/core';
import Header from './Header';

import Content from './Content';

import * as S from './styles';

import { albums } from './mocks/content';

import Layout from './Layout';

const Player: React.FC = () => {
    const [songs] = useState(albums);
    return (
        <Layout>
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
        </Layout>
    );
};

export default Player;
