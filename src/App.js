
import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [clickCount, setClickCount] = useState(0);
 

    const handleClick = () => {
        if (clickCount === 0) {
            alert("Let the fun start!");
        }
        setClickCount(prevCount => prevCount + 1);
    };

  
    return (
      
        <div className="App">
            <img src="https://images.crazygames.com/click-click-clicker_16x9/20240206102255/click-click-clicker_16x9-cover?auto=format,compress&q=75&cs=strip" alt="Game Image" className="top-image" />
            <h1>Click Counter Game</h1>
            <div className="click-count">
                Clicks: {clickCount}
            </div>
            <div className="coin-counter">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ssCnkNWb6Fc1vX-MrriJpGvlqL0qoGROaQ&s" alt="Coin" className="coin-image" />
                <span>x {clickCount}</span>
            </div>
            <button className="red-button" onClick={handleClick}>Click Me!</button>
            
            
        </div>
    );
};

export default App;
