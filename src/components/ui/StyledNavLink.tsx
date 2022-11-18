import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  // invoke 'styled' with a custom component to add style to it
  color: #96a6a7;
  text-transform: uppercase;
  font-weight: 500;
  margin: 5px 5px;
  font-size: 0.8125em;
  text-decoration: none;
`;
