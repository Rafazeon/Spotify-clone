import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #121212;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
`;

export const TitleContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 99%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin: 0 20px;

    padding-bottom: 1%;
`;

export const SubTitle = styled.h2`
    color: #b3b3b3;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;

    text-transform: uppercase;
`;

export const Player = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;
`;
