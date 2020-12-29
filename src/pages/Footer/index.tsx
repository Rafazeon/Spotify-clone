import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { FaInstagram } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

import * as S from './styles';

import LogoImg from '../../assets/logo.png';
import BrasilImg from '../../assets/brasil.png';

const Footer: React.FC = () => {
    return (
        <S.Container>
            <S.Content>
                <Grid container>
                    <Grid item xs={12} lg={2} md={6} sm={6}>
                        <img src={LogoImg} alt="Logo" />
                    </Grid>

                    <Grid item xs={12} lg={2} md={6} sm={6}>
                        <S.Information>
                            <h2>Empresa</h2>
                            <Link to="#about">Sobre</Link>
                            <Link to="#services">Empregos</Link>
                            <Link to="#team">For the Record</Link>
                        </S.Information>
                    </Grid>

                    <Grid item xs={12} lg={2} md={6} sm={6}>
                        <S.Information>
                            <h2>Comunidades</h2>
                            <Link to="#artist">Para artistas</Link>
                            <Link to="#dev">Desenvolvedores</Link>
                            <Link to="#marketing">Publicidade</Link>
                            <Link to="#founders">Investidores</Link>
                            <Link to="#partners">Fornecedores</Link>
                        </S.Information>
                    </Grid>

                    <Grid item xs={12} lg={2} md={6} sm={6}>
                        <S.Information>
                            <h2>Links Úteis</h2>
                            <Link to="#support">Suporte</Link>
                            <Link to="#player">Player da web</Link>
                            <Link to="#app">Aplicativo móvel grátis</Link>
                            <Link to="#year">Retrospectiva 2020</Link>
                        </S.Information>
                    </Grid>

                    <Grid item xs={12} lg={4} md={6} sm={6}>
                        <S.InformationSocial>
                            <ul>
                                <Link to="#instagram">
                                    <div>
                                        <FaInstagram />
                                    </div>
                                </Link>
                                <Link to="#twitter">
                                    <div>
                                        <FiTwitter />
                                    </div>
                                </Link>
                                <Link to="#facebook">
                                    <div>
                                        <FiFacebook />
                                    </div>
                                </Link>
                            </ul>
                        </S.InformationSocial>
                    </Grid>

                    <Grid item xs={12} lg={12} md={6} sm={12}>
                        <S.InformationPrivacy>
                            <ul>
                                <Link to="#instagram">Legal</Link>
                                <Link to="#twitter">
                                    Central de privacidade
                                </Link>
                                <Link to="#facebook">
                                    Política de privacidade
                                </Link>
                                <Link to="#facebook">Cookies</Link>
                                <Link to="#facebook">Sobre anúncios</Link>
                            </ul>

                            <div>
                                <span>Brasil <img src={BrasilImg} alt="Brasil" /></span>
                                <span>© 2020 Spotify AB</span>
                            </div>
                        </S.InformationPrivacy>
                    </Grid>
                </Grid>
            </S.Content>
        </S.Container>
    );
};

export default Footer;
