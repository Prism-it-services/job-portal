import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #3a3a3a;
`;

export const Nav = styled.nav`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #3a3a3a;
  }
`;

export const AuthButtons = styled.div`
  display: flex;

  button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #6200ea;
    color: white;
    cursor: pointer;

    &.sign-up {
      background-color: #9c27b0;
    }
  }
`;