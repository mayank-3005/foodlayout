import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,  faLinkedin, faInstagram,  } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div id="fixed-social">
      <div>
        <a href="https://www.facebook.com" className="fixed-facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com" className="fixed-twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} /> 
        </a>
      </div>
      
      <div>
        <a href="https://www.linkedin.com" className="fixed-linkedin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> 
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com" className="fixed-instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
      </div>
      
    </div>
  );
};

export default SocialIcons;
