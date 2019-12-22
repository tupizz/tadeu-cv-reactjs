import React from 'react';
import Sidebar from '../Sidebar';
import { StyledContent } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
