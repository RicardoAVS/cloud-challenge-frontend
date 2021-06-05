import styled from 'styled-components';

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkillName = styled.div`
    margin: 5px 0;
    font-weight: 300;
    color: slategrey;
    font-size: 24px;
    margin: 10px 0;
`;

export const SkillBarContainer = styled.div`
    width: 100%;
    height: 8px;
    background-color: rgba(135, 148, 163, 0.322);
`;

export const SkillBarCompleted = styled.div<{width: string}>`
    height: 8px;
    background-color: rgb(21, 47, 77);
    float: right;
    width: ${props => props.width}
`;