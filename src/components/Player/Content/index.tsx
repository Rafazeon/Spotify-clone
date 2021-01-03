import React from 'react';
import * as M from '@material-ui/core';
import * as S from './styles';
import { Album } from '../mocks/interfaces';

const Content: React.FC<Album> = ({ title, description, image }) => {
    return (
        <S.Container>
            <M.Grid item xs={12} lg={12} md={6} sm={3}>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <span>{description}</span>
            </M.Grid>
        </S.Container>
    );
};

export default Content;
