import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Education32, Enterprise32, Code32, User32, Email32 } from '@carbon/icons-react';
import { StyledSideNav, CustomSideNavItems } from './styles';

const items = [
  { name: 'Me', path: '/', icon: User32 },
  { name: 'Projects', path: '/projects', icon: Code32 },
  { name: 'Work', path: '/work', icon: Enterprise32 },
  { name: 'Education', path: '/education', icon: Education32 },
  { name: 'Contact', path: '/contact', icon: Email32 },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav expanded={false} isChildOfHeader={false} aria-label="Side navigation">
      <CustomSideNavItems>
        {items.map(i => (
          <SideNavLink
            renderIcon={i.icon}
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </CustomSideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
