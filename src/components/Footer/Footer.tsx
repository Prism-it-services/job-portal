import React from 'react';
import { FooterContainer} from './styles';

export const Footer: React.FC = () => (
    <FooterContainer>
      <div className="footer-section">
        <div className="footer-column">
          <select>
            <option>United Kingdom (English)</option>
            <option>United States (English)</option>
            
          </select>
        </div>
        <div className="footer-column">
          <h3>For Job Seekers</h3>
          <a href="#">Browse Jobs</a>
          <a href="#">Career Advice</a>
          <a href="#">Company Profile</a>
          <a href="#">Help</a>
        </div>
        <div className="footer-column">
          <h3>For Employers</h3>
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Help</a>
        </div>
        <div className="footer-column">
          <h3>Helpful Resources</h3>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Centre</a>
          <a href="#">Security Centre</a>
          <a href="#">Accessibility Centre</a>
          <a href="#">Cookie Settings</a>
          <a href="#">AdChoices</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <span>Find us on social media:</span>
          <a href="#"><img src="path-to-facebook-icon" alt="Facebook" /></a>
          <a href="#"><img src="path-to-twitter-icon" alt="Twitter" /></a>
          <a href="#"><img src="path-to-instagram-icon" alt="Instagram" /></a>
          <a href="#"><img src="path-to-youtube-icon" alt="YouTube" /></a>
        </div>
        <div className="app-links">
          <a href="#"><img src="path-to-appstore-icon" alt="App Store" /></a>
          <a href="#"><img src="path-to-googleplay-icon" alt="Google Play" /></a>
        </div>
      </div>
    </FooterContainer>
  );