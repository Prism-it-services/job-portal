import React from 'react';
import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #2c003e;
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
`;

export const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
  }

  .search-button {
    padding: 10px;
    background-color: #9c27b0;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    input, .search-button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const UploadCV = styled.a`
  display: block;
  margin-bottom: 20px;
  color: #00bcd4;
  text-decoration: none;
`;

export const PopularSearches = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  a {
    background-color: #3a3a3a;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    a {
      padding: 5px 10px;
      font-size: 14px;
    }
  }
  
`;