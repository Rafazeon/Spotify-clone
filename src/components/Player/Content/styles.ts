import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    transition: 1s;
    max-height: 260px;
    max-width: 200px;
    margin: 0 20px;

    img {
        width: 148px;
        height: 148px;
    }

    h2 {
        font-size: 16px;
        color: #f8f8f8;
        font-weight: 600;
        line-height: 1.8;
        margin-top: 8px;
    }

    span {
        color: #9b9b9b;
        font-size: 14px;
    }

    &:hover {
        background-color: #303030;
        cursor: pointer;
    }
`;
