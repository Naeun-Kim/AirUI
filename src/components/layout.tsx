import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #111;
`;

const MenuItem = styled.span`
  display: inline-block;
  margin-left: 20px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default function Layout() {
  return (
    <>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/components">Components</Link>
        </MenuItem>
      </Menu>
      <Outlet />
    </>
  );
}
