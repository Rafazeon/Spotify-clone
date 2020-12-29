import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import * as S from './styles';

const Premium: React.FC = () => {
    return (
            <S.Container>
                <S.Content>
                    <Grid container>
                        <S.Main item xs={12} lg={6} md={6} sm={12}>
                            <S.Information>
                                <p>Spotify Premium</p>
                                <S.Desktop>
                                    <S.Image />
                                </S.Desktop>
                                <h1>Tá acabando: 3 meses de Premium grátis</h1>
                                <h2>Oferta acaba em 4 dias.</h2>
                                <h2>
                                    Não perca a chance de ouvir sua música sem
                                    anúncios, no modo offline e muito mais.
                                    Cancele quando quiser.
                                </h2>

                                <S.Btn variant="contained">
                                    Ganhe 3 meses grátis
                                </S.Btn>

                                <h3>
                                    Somente para o plano Individual. Depois,
                                    apenas R$ 16,90/mês. Oferta indisponível
                                    para usuários que já experimentaram o
                                    Premium.
                                    <Link to="#teste">
                                        Sujeita a Termos e Condições
                                    </Link>
                                    . A oferta termina em 31 de dez de 2020.
                                </h3>
                            </S.Information>
                        </S.Main>

                        <S.Main item xs={12} lg={6} md={6} sm={12}>
                            <S.Spacing>
                                <S.Image />
                            </S.Spacing>
                        </S.Main>
                    </Grid>
                </S.Content>
            </S.Container>
    );
};

export default Premium;
