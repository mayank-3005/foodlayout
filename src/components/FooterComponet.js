import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="footer flex justify-between">
            <div className="left-content">
                Designed by Demo | Powered by React
            </div>
            <div className="right-content">
               <i className="fab fa-facebook"></i>
               <i className="fab fa-twitter"></i>
               <i className="fab fa-google"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </footer>
    );
}

export default FooterComponent;
