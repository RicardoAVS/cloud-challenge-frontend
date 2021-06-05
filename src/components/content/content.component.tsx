import React from 'react';
import { 
    ExperienceContainer,
    Title, 
    SubTitle,
    TimeFrame,
    Description,
    ProjectStatusContainer
    } from './content.styles';

interface Props {
    title: string,
    subTitle: string,
    timeFrame?: string,
    description: string,
    projectStatus?: {
        completed: boolean,
        sourceCode: string
    } | any
}

const Content: React.FC<Props> = ({ title, subTitle, timeFrame, description, projectStatus }) => (
    <ExperienceContainer>
      <Title>{ title }</Title>
      <SubTitle>{subTitle}</SubTitle>
        {
        timeFrame ? 
            <TimeFrame>{timeFrame}</TimeFrame> :
            ''
        }
      <Description>
        <p>{description}</p>
        <ProjectStatusContainer>
          <p><strong>{
              projectStatus ?
               projectStatus.completed ? 'Completed' : 'In progress' :
               ''
            }</strong></p>
          <p><strong>{ projectStatus ? 'Source Code ' : ''}</strong>
            {
                projectStatus ? 
                    <a
                    href="https://github.com/RicardoAVS/RockPaperScissor"
                    target="_blank"
                    >{projectStatus?.sourceCode}
                    </a>
                : ''
            }

          </p>
          </ProjectStatusContainer>
        </Description>
    </ExperienceContainer>
)

export default Content;