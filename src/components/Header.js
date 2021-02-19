import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiUser3Line as UserIcon } from 'react-icons/ri';
import { BiShoppingBag as ShoppingBagIcon } from 'react-icons/bi';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <h1>Coffee Corner</h1>
        <nav>
          <ul>
            <li>
              <Link to="/products">SHOP</Link>
            </li>
            <li>
              <Link to="/account">
                <UserIcon />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingBagIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 999;
  .container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    ul {
      display: flex;
      li {
        padding-left: 5rem;
        opacity: 0.8;
        svg {
            width: 2rem;
            height: 2rem;
        }
        &:hover {
            opacity: 1;
        }
      }
    }
  }
`;

export default Header;
