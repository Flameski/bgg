import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: white;
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  .active {
    // this className is available to all CHILD components, not to the Nav itself
    color: #e94e38;
  }
`;
