import React from 'react';
import { SkillContainer, SkillName, SkillBarContainer, SkillBarCompleted } from './status-bar.styles';

interface Props {
    name: string,
    statusBarWidth: string,
}

const StatusBar: React.FC<Props> = ({ name, statusBarWidth }) => (
    <SkillContainer>
        <SkillName>{name}</SkillName>
        <SkillBarContainer>
            <SkillBarCompleted width={statusBarWidth}></SkillBarCompleted>
        </SkillBarContainer>
    </SkillContainer>
)

export default StatusBar;