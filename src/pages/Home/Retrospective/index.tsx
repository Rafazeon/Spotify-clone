import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import * as S from './styles';

const Retrospective: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <Grid container>
                    <S.Main item xs={12} lg={6} md={12} sm={12}>
                        <S.Spacing>
                            <div>
                                <div>
                                    <h4>Retrospectiva</h4>
                                    <h4>2020</h4>
                                </div>
                            </div>
                        </S.Spacing>
                    </S.Main>

                    <S.Main item xs={12} lg={6} md={12} sm={12}>
                        <S.Information>
                            <p>Retrospectiva 2020</p>
                            <h4>Veja o que rolou no seu Spotify</h4>
                            <h3>
                                Descubra os artistas, músicas e podcasts que te
                                ajudaram a
                            </h3>

                            <h3>
                                sobreviver ao ano mais longo da
                                história.
                            </h3>

                            <S.Btn variant="contained">
                                Confira sua retrospectiva
                            </S.Btn>
                        </S.Information>
                    </S.Main>
                </Grid>
            </S.Content>
        </S.Container>
    );
};

export default Retrospective;
