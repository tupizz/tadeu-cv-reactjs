import styled from 'styled-components';
import { white } from '@carbon/colors';

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const WorkTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

export const JobTitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: #82c9ff;
`;
