import React from 'react';

import Grid from '@material-ui/core/Grid';
import * as S from './styles';

const Retrospective: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <Grid container>
                    <S.Main item xs={12} lg={6} md={12} sm={12}>
                        <S.Information>
                            <p>Spotify Free</p>
                            <div>
                                <h4>Escutar muda</h4>
                                <h4>tudo</h4>
                            </div>

                            <h3>
                                Milhões de músicas e podcasts para explorar. E
                                nem precisa de
                            </h3>
                            <h3>cartão de crédito.</h3>

                            <S.Btn variant="contained">
                                Obtenha o spotify free
                            </S.Btn>
                        </S.Information>
                    </S.Main>
                </Grid>
            </S.Content>
        </S.Container>
    );
};

export default Retrospective;
