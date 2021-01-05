import styled from 'styled-components';

import ReactPlayer from 'react-player';

import * as I from './interfaces';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #282828;
    padding: 7px;
`;

export const Music = styled.div`
    display: flex;

    img {
        height: 80px;
        width: 80px;
    }

    div {
        margin-top: 10px;
        margin-left: 10px;

        color: #fff;
    }

    svg {
        color: #fff;
        font-size: 20px;
        cursor: pointer;

        margin: 15px 20px;

        &:hover {
            color: #1ed760;
        }
    }
`;

export const Player = styled.div`
    color: #fff;
    font-size: 15px;
    display: flex;
    justify-content: center;

    svg {
        margin: 15px 10px;
        cursor: pointer;
    }
`;

export const PlayerIcon = styled.div`
    font-size: 23px;
    position: relative;
    bottom: 5px;
`;

export const Volume = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #fff;
    position: relative;
    top: 10px;
    cursor: pointer;

    @media only screen and (max-width: 599px) {
        justify-content: center;
        margin-bottom: 15px;
    }
`;

export const Slider = styled.div<I.SliderProps>`
    display: flex;
    width: ${(props) => (props.size ? props.size : '200px')};
    margin: 5px 15px;
`;

export const SliderPlayer = styled.div`
    display: flex;
    width: 400px;
    margin: 5px auto;

    p {
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        bottom: 16px;
    }

    > div {
        position: relative;
        bottom: 15px;
    }
`;

export const RctPlayer = styled(ReactPlayer)`
    width: 0px !important;
    height: 0px !important;

    a {
        display: none !important;
    }
`;
