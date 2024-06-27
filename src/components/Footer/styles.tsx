import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #003e27;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;

  .footer-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }

  .footer-column {
    margin: 10px;
    min-width: 150px;
  }

  .footer-column h3 {
    color: #ff9800;
    margin-bottom: 10px;
  }

  .footer-column a {
    display: block;
    color: white;
    text-decoration: none;
    margin: 5px 0;
  }

  .footer-column a:hover {
    text-decoration: underline;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .social-media,
  .app-links {
    display: flex;
    align-items: center;
  }

  .social-media a,
  .app-links img {
    margin: 0 10px;
  }
`;