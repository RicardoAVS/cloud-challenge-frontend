import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: #292927;
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-align: center;
`;

export const CountTitle = styled.div`
    p {
        font-size: 2em;
        font-weight: 700;
        margin: 0.7em 0 0 0;
    }
`;

export const CountBox = styled.div`
    border: 1px solid beige;
    width: 3%;
    height: 0.4%;
    font-size: 2.7em;
    text-align: center;
    border-radius: 7%;
    margin: 1em 0.02em;

    * {
        margin: 0.4em 0;
    }
`;

export const ViewCountContainer = styled.div`
    display: flex;
    justify-content: center;
`;