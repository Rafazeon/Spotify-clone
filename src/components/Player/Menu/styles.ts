import styled from 'styled-components';

export const Container = styled.section`
    background: #000;
    height: 800px;
    width: 232px;
    min-height: 100vh;

    @media only screen and (max-width: 767px) {
        width: 0%;
    }

    section {
        width: 10%;
        @media only screen and (max-width: 767px) {
            width: 100%;
        }
        line-height: 40px;

        div {
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 767px) {
                flex-direction: row;
            }

            img {
                @media only screen and (min-width: 769px) {
                    margin-bottom: 30px;
                }
            }

            ul {
                flex-direction: column;
            }
        }
    }
`;
