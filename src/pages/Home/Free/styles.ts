import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Container = styled.section`
    height: auto;
    padding-top: 95px;
    padding-bottom: 135px;

    background-image: url('https://www.scdn.co/i/projectRamses/LiE_circles.svg');
    background-color: #2D46B9;
    background-repeat: no-repeat;
    background-size: auto 150%;
    background-position: 65% center;

    @media only screen and (max-width: 1279px) {
        background-position: 35% center;
    }

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
        color: #1ed760;
    }

    h3 {
        font-weight: bold;
        line-height: 22px;

        color: #1ed760;
    }

    div {
        margin-top: 50px;
        margin-bottom: 40px;

        h4 {
            font-size: 64px;
            line-height: 40px;

            font-weight: bold;
            color: #1ed760;
            margin-bottom: 26px;

            @media only screen and (max-width: 767px) {
                font-size: 40px;
                line-height: 26px;
            }
        }
    }
`;

export const Btn = styled(Button)`
    background: #1ed760 !important;
    color: #2d46b9 !important;
    font-size: 15px !important;
    font-weight: bold !important;

    border-radius: 30px !important;
    padding: 10px !important;
    padding-right: 40px !important;
    padding-left: 40px !important;

    margin-top: 30px !important;
    margin-bottom: 30px !important;

    &:hover {
        background: #fff !important;
    }
`;
