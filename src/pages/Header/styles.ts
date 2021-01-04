import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { shade } from 'polished';

import {
    HeaderScrollProps,
    HeaderPropsActive,
    HeaderLinkColor,
} from './interfaces';

export const Container = styled.section<HeaderScrollProps>`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    background: #000;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;

    @media only screen and (min-width: 768px) {
        background: ${(props) => (props.scroll ? '#00000099' : '#000')};
    }

    div {
        width: 1200px;
        align-items: center;
        justify-content: space-between;
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        padding-left: 20px;

        img {
            height: 40px;
            width: 132px;
        }

        > svg {
            @media only screen and (min-width: 768px) {
                display: none;
            }

            color: #fff;
            font-size: 32px;
            transition: color 2s;
            margin-right: 20px;
            cursor: pointer;

            &:hover {
                color: ${shade(0.2, '#fff')};
            }
        }

        ul {
            @media only screen and (max-width: 767px) {
                display: none;
            }
            padding-left: 5px;
            display: flex;
        }
    }
`;

export const ItemList = styled.li<HeaderPropsActive>`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 13px;
    list-style-type: none;
    padding-right: 35px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s;

    @media only screen and (max-width: 767px) {
        width: 100%;
        line-height: 2;
        font-size: 36px;
        margin-left: 50px;
    }
`;

export const Separator = styled.p`
    height: 2px;
    width: 20px;
    background: #fff;
    transform: rotate(90deg);
    position: relative;
    top: 8px;
    cursor: none;

    @media only screen and (max-width: 767px) {
        height: 2px;
        width: 20px;
        background: #fff;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 70px;
        transform: rotate(0deg);
    }
`;

export const LinkRef = styled(Link)<HeaderLinkColor>`
    text-decoration: none;

    &:hover {
        color: ${(props) => (props.hover ? props.hover : shade(0.2, '#fff'))};
    }
`;
