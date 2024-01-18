import React, { useState, useRef } from 'react';
import './Home.css';
import audioFile from './assets/audio.mp3';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(null);

  const deliverMessage = () => {
    setShowMessage(true);

    // Play audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Autoplay prevented:', error);
      });
    }
  };

  return (
    <div className="users-container">
      <div className="title" onClick={() => setShowMessage(!showMessage)}>
        {showMessage || (
          <button className="button3" onClick={deliverMessage}>
            Click Me!
          </button>
        )}
      </div>

      <div className={`giphy-container ${showMessage}`}>
        <img
          src="https://i.pinimg.com/originals/a9/36/c2/a936c2d173cb4af7a620d41222ab856a.gif"
          alt="Giphy"
        />
      </div>

      <div className={`message-container ${showMessage ? 'show-container' : ''}`}>
        {showMessage && (
          <>
            <p>Hi! I am Shinzo!</p>
            <p>Let's Boost your Productivity together </p>
          </>
        )}
      </div>

      {/* Audio Element */}
      <audio ref={audioRef}>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default Home;
