import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';

export const Container = styled.section`
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;

        a {
            font-size: 26px;
            margin-bottom: 10px;
        }
    }
`;

export const Menu = styled(Drawer)`
    z-index: 10 !important;

    div {
        top: 6%;
        width: 100%;
        background: #000;

        section {
            color: #fff;
        }
    }

    img {
        width: 135px;
        margin-left: 50px;
        position: absolute;
        top: 80%;
    }
`;
