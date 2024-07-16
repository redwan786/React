import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>QuickBites App</p>
        <div className="app-download-platforms">
            <a href="https://play.google.com/store/apps/" target="_blank" rel="noopener noreferrer">
                <img src={assets.play_store} alt="Google Play Store" />
            </a>
            <a href="https://apps.apple.com/us/app/" target="_blank" rel="noopener noreferrer">
                <img src={assets.app_store} alt="Apple App Store" />
            </a>
        </div>
    </div>
  );
}

export default AppDownload;
