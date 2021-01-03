import styled from 'styled-components';

export const Container = styled.section`
    background: #000;
    padding: 26px;
    height: 800px;
    width: 232px;
    min-height: 100vh;

    ul {
        margin-top: 20px;
        margin-bottom: 20px;

        li {
            color: #fff;
            list-style: none;
            line-height: 32px;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                color: #1ed760;
            }
        }
    }

    p {
        text-transform: uppercase;
        font-weight: bold;
    }

    img {
        height: 40px;
        width: 132px;
    }
`;
