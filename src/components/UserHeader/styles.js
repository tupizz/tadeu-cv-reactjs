import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const SubHeaderText = styled.h5`
  text-transform: uppercase;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 1rem;
  border-radius: calc(180px / 2);
  border: 8px solid #2b2b2b;
`;

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;
