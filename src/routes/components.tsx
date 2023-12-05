import { Link, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Menu = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #111;
`;

const MenuItem = styled.span`
  display: inline-block;
  margin-left: 20px;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export default function Components() {
  return (
    <>
      <h1>Components</h1>
      <Menu>
        <MenuItem>
          <Link to="card">Card</Link>
          <Link to="tab">Tab</Link>
        </MenuItem>
      </Menu>
      <Outlet />
    </>
  );
}
