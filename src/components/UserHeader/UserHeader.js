import React from 'react';
import { SectionTitle } from '../../styles';

import {
  HeaderContainer,
  Header,
  Image,
  ProfileLink,
  SubHeaderText,
} from './styles';

const UserHeader = ({ user }) => {
  return (
    <HeaderContainer>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <SectionTitle>{user.basics.name}</SectionTitle>
          <SubHeaderText>{user.basics.label}</SubHeaderText>
          <b>{user.basics.region}</b>
          <p>{user.basics.headline}</p>
          <b>
            {user.basics.yearsOfExperience} years of experience as a developer
          </b>
        </div>
      </Header>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
