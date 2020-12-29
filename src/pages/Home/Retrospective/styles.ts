import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Container = styled.section`
    background: #cb1582;
    height: auto;
    padding-top: 95px;
    padding-bottom: 95px;

    @media only screen and (max-width: 767px) {
        padding-left: 30px;
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 26px;

    @media only screen and (max-width: 1279px) {
        text-align: center;

        padding-left: 10px;
        padding-right: 40px;
    }
`;

export const Main = styled(Grid)`
    @media only screen and (max-width: 1279px) {
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 990px) {
        max-width: 100% !important;
        flex-basis: 100% !important;
    }
`;

export const Information = styled.span`
    p {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        margin-bottom: 30px;

        text-transform: uppercase;
        color: #a5ffef;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        line-height: 16px;
        margin-top: 5px;

        color: #a5ffef;
    }

    h4 {
        font-size: 64px;
        line-height: 64px;

        font-weight: bold;
        color: #a5ffef;
        margin-bottom: 26px;

        @media only screen and (max-width: 767px) {
            font-size: 40px;
            line-height: 50px;
        }
    }
`;

export const Spacing = styled.div`
    max-width: 80%;

    @media only screen and (max-width: 1279px) {
        margin-bottom: 50px;
    }

    div {
        background: linear-gradient(
            359.37deg,
            #000 3.09%,
            #ff4632 22.4%,
            #fae62d 46.64%,
            #9bf0e1 62.15%,
            #a0c3d2 79.91%,
            #4100f5 99.49%
        );

        padding: 0 50px;
        margin-top: 30px;

        @media only screen and (max-width: 469px) {
            padding: 0 20px;
        }

        div {
            background: #a5ffef;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 200px;
            padding-bottom: 30px;

            position: relative;
            bottom: 50px;

            h4 {
                font-size: 40px;
                font-weight: bold;
                padding-bottom: 20px;

                color: #cb1582;

                @media only screen and (min-width: 501px) and (max-width: 1279px) {
                    font-size: 26px;
                    text-align: center;
                    width: 100%;
                }

                @media only screen and (min-width: 470px) and (max-width: 500px) {
                    font-size: 20px;
                    text-align: center;
                    width: 100%;
                }

                @media only screen and (max-width: 469px) {
                    font-size: 15px;
                    text-align: center;
                    width: 100%;
                }
            }
        }
    }
`;

export const Btn = styled(Button)`
    background: #a5ffef !important;
    color: #cb1582 !important;
    font-size: 15px !important;
    font-weight: bold !important;

    border-radius: 30px !important;
    padding: 10px !important;
    padding-right: 40px !important;
    padding-left: 40px !important;

    margin-top: 30px !important;
    margin-bottom: 30px !important;

    &:hover {
        font-size: 16px !important;
        background: #fff !important;
    }
`;
