import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  const deliverMessage = () => {
    setShowMessage(true);
  };

  return (
    <div className="users-container">
      <div className="title" onClick={() => setShowMessage(!showMessage)}>
        {showMessage || <button className='button3' onClick={deliverMessage}>Deliver Message</button>}
      </div>

      <div className={`giphy-container ${showMessage }`}>
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
    </div>
  );
};

export default Home;
