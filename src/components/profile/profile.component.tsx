import React from 'react';
import { 
  ProfileContainer, 
  ImageContainer, 
  ProfileName,
  Profession,
  Summary,
} from './profile.styles';

interface Props {
  imageSrc: any,
  profileName: string,
  profession: string,
  summary: string,
}

const Profile: React.FC<Props> = ({ imageSrc, profileName, profession, summary }) => (
    <ProfileContainer>
      <ImageContainer>
        <img
          src={imageSrc}
          alt="Profile Picture Ricardo Villada"
        />
      </ImageContainer>
      <ProfileName>{profileName}</ProfileName>
      <Profession>{profession}</Profession>
      <Summary>
        <p>
          {summary}
        </p>
        </Summary>
    </ ProfileContainer>
);

export default Profile;