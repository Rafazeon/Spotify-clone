import styled from 'styled-components';

import * as M from '@material-ui/core';

export const Container = styled.section`
    display: flex;
    background-color: #121212;
    padding: 20px;
    justify-content: space-between;
`;

export const Icon = styled.div`
    font-size: 26px;
    color: #ddd;

    > svg {
        margin-top: 5px;
        margin-left: 20px;
    }
`;

export const Profile = styled.div`
    display: flex;
    width: 26%;
    justify-content: space-between;

    > span {
        display: flex;
        margin-top: 8px;
        margin-left: 30px;

        div {
            background: #ddd;
            border-radius: 50%;
            font-size: 18px;
            width: 28px;
            height: 28px;
            position: relative;
            bottom: 5px;
            margin-right: 5px;

            svg {
                margin-left: 5px;
                margin-top: 3px;
            }
        }

        > svg {
            color: #ddd;
        }
    }
`;

export const Btn = styled(M.Button)`
    width: 100% !important;
    background: #000 !important;
    color: #fff !important;
    border: 1px solid #fff !important;
    font-weight: bold !important;

    border-radius: 30px !important;

    &:hover {
        color: #1ed760 !important;
    }
`;
