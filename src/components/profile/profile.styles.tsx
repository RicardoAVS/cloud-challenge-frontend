import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 343px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 250px;
        height: 250px;
        padding: 6px;
        background: linear-gradient(
          to bottom,
          rgba(47, 80, 119, 1) 0%,
          rgba(9, 63, 125, 1) 51%,
          rgba(8, 77, 138, 1) 100%,
          rgba(9, 58, 121, 1) 100%,
          rgba(0, 212, 255, 1) 100%
        );
        border-radius: 50%;
    }
`;

export const ProfileName = styled.div`
    font-size: 54px;
    font-weight: 900;
    text-align: center;
    color: rgb(21, 47, 77);
    text-transform: uppercase;
`;

export const Profession = styled.div`
    font-size: 32px;
    text-transform: capitalize;
    color: rgba(8, 77, 138, 1);
    margin: 8px 0;
`;

export const Summary = styled.div`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
`;