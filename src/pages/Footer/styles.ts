import styled from 'styled-components';

export const Container = styled.section`
    background: #000;
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    img {
        width: 130px;
        margin-left: 23px;
    }

    div {
        padding-top: 50px;

        div {
            h2 {
                font-size: 12px;
                text-transform: uppercase;
                color: #919496;
            }

            h3 {
                color: #fff;
                font-weight: 600;
                line-height: 2;
            }
        }
    }
`;

export const Information = styled.span`
    margin-top: 20px;
    margin-left: 22px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 18px;
    }

    a {
        text-decoration: none;
        margin-top: 13px;
        margin-bottom: 13px;

        &:hover {
            color: #1ed760;
        }
    }
`;

export const InformationSocial = styled.span`
    display: flex;
    margin-top: 18px;

    @media only screen and (min-width: 1280px) {
        flex-direction: row-reverse;
    }

    @media only screen and (max-width: 767px) {
        margin-left: 20px;
    }

    ul {
        display: flex;
    }

    a {
        padding-right: 15px;
    }

    div {
        border-radius: 50%;
        background: #222326;
        width: 54px;
        height: 54px;
        padding: 13px;
    }

    svg {
        font-size: 28px;
        color: #fff;
        margin: 0 auto;

        &:hover {
            color: #1ed760;
        }
    }
`;

export const InformationPrivacy = styled.span`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {
        margin-left: 30px;
        height: 50px;
    }

    a {
        padding-right: 15px;
        font-size: 12px;
        text-decoration: none;
        color: #919496;

        &:hover {
            color: #1ed760;
        }
    }

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            color: #919496;
            padding: 8px;

            display: flex;
            justify-content: flex-end;

            position: relative;
            bottom: 90px;

            img {
                width: 26px;
                height: 20px;
                margin-left: 10px;
                position: relative;
                bottom: 3px;
            }
        }
    }
`;
