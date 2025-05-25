import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h4 className="footer-links-h4">Company</h4>
          <ul className="footer-links-ul">
            <li className="footer-links-li"><span className="footer-link">About Last.fm</span></li>
            <li className="footer-links-li"><span className="footer-link">Contact Us</span></li>
            <li className="footer-links-li"><span className="footer-link">Jobs</span></li>
            <li className="footer-links-li"><span className="footer-link">Features</span></li>
          </ul>
        </div>
        <div className="footer-links-div">
          <h4 className="footer-links-h4">Help</h4>
          <ul className="footer-links-ul">
            <li className="footer-links-li"><span className="footer-link">Track My Music</span></li>
            <li className="footer-links-li"><span className="footer-link">Community Support</span></li>
            <li className="footer-links-li"><span className="footer-link">Community Guidelines</span></li>
            <li className="footer-links-li"><span className="footer-link">Help</span></li>
          </ul>
        </div>
        <div className="footer-links-div">
          <h4 className="footer-links-h4">Goodies</h4>
          <ul className="footer-links-ul">
            <li className="footer-links-li"><span className="footer-link">Download Scrobbler</span></li>
            <li className="footer-links-li"><span className="footer-link">Developer API</span></li>
            <li className="footer-links-li"><span className="footer-link">Free Music Downloads</span></li>
            <li className="footer-links-li"><span className="footer-link">Merchandise</span></li>
          </ul>
        </div>
        <div className="footer-links-div">
          <h4 className="footer-links-h4">Account</h4>
          <ul className="footer-links-ul">
            <li className="footer-links-li"><span className="footer-link">Inbox</span></li>
            <li className="footer-links-li"><span className="footer-link">Settings</span></li>
            <li className="footer-links-li"><span className="footer-link">Last.fm Pro</span></li>
          </ul>
        </div>
        <div className="footer-links-div">
          <h4 className="footer-links-h4">Follow Us</h4>
          <ul className="footer-links-ul">
            <li className="footer-links-li"><span className="footer-link">Facebook</span></li>
            <li className="footer-links-li"><span className="footer-link">X</span></li>
            <li className="footer-links-li"><span className="footer-link">Bluesky</span></li>
            <li className="footer-links-li"><span className="footer-link">Instagram</span></li>
            <li className="footer-links-li"><span className="footer-link">YouTube</span></li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">Powered by Last.fm API</p>
    </footer>
  );
};

export default React.memo(Footer);