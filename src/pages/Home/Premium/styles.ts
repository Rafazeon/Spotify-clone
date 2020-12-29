import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Container = styled.section`
    background: #a5ffef;
    height: auto;
    padding-top: 180px;
    padding-bottom: 95px;

    @media only screen and (max-width: 767px) {
        padding-top: 130px;
        padding-left: 30px;
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 26px;

    @media only screen and (max-width: 990px) {
        text-align: center;
        padding-left: 10px;
        padding-right: 40px;
    }
`;

export const Main = styled(Grid)`
    @media only screen and (max-width: 990px) {
        max-width: 100% !important;
        flex-basis: 100% !important;
    }
`;

export const Information = styled.span`
    p {
        font-size: 14px;
        line-height: 16px;
        font-weight: bold;
        margin-bottom: 30px;

        text-transform: uppercase;
        color: #cb1582;
    }

    h1 {
        font-size: 64px;
        line-height: 64px;

        font-weight: bold;
        color: #cb1582;

        @media only screen and (max-width: 767px) {
            font-size: 40px;
            line-height: 50px;
            margin-top: 10px;
        }
    }

    h2 {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;

        margin-top: 15px;
        margin-bottom: 18px;
        color: #cb1582;
    }

    h3 {
        font-size: 13px;
        font-weight: 500;
        line-height: 16px;

        color: #cb1582;

        a {
            color: #cb1582;
        }
    }
`;

export const Desktop = styled.div`
    @media only screen and (min-width: 991px) {
        display: none;
    }
`;

export const Spacing = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 35px;

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const Image = styled.img`
    @media only screen and (min-width: 992px) {
        width: 440px;
        height: 440px;

        background: url('https://campaigns.scdn.co/images/holiday-2020-second-wave.jpg')
            no-repeat;
        background-size: contain;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        width: 400px;
        height: 400px;

        background: url('https://campaigns.scdn.co/images/holiday-2020-second-wave.jpg')
            no-repeat;
        background-size: contain;
    }

    @media only screen and (max-width: 767px) {
        width: 132px;
        height: 132px;

        background: url('https://campaigns.scdn.co/images/holiday-2020-second-wave.jpg')
            no-repeat;
        background-size: contain;
    }
`;

export const Btn = styled(Button)`
    background: #cb1582 !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: bold !important;

    border-radius: 30px !important;
    padding: 10px !important;
    padding-right: 40px !important;
    padding-left: 40px !important;

    margin-top: 18px !important;
    margin-bottom: 30px !important;

    &:hover {
        background: #fff !important;
        color: #000 !important;
    }
`;
