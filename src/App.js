import React, { useState } from 'react';
import './App.css';
import CoinCounter from './Components/CoinCounter';
import ClickedButton from './Components/ClickedButton';
import calculateIncrement from './Components/UpgradeEffect';
import upgradesData from './Data/UpgradeData';
import UpgradeEffects from './Components/UpgradeEffects';

const App = () => {
    const [clickCount, setClickCount] = useState(0);
    const [activeUpgrades, setActiveUpgrades] = useState([0]);
    const [usedUpgrades, setUsedUpgrades] = useState([0]);

    const handleClick = () => {
        if (clickCount === 0) {
            alert("Let the fun start!");
        }
        if (clickCount >= 500) {
          alert("!!!!YoU WiNNN!!!!");
      }

        const increment = calculateIncrement(activeUpgrades);
        setClickCount(prevCount => prevCount + increment);
    };

    const handleUpgrade = (upgrade) => {
      if (clickCount >= upgrade.cost) {
          setClickCount(prevCount => prevCount - upgrade.cost);
          setActiveUpgrades(prevUpgrades => prevUpgrades.concat(upgrade));
          setUsedUpgrades(prevUsed => prevUsed.concat(upgrade.name));
      } else {
          alert("Not enough clicks!");
      }
  };

  const availableUpgrades = upgradesData.filter(upgrade => 
      !usedUpgrades.includes(upgrade.name) && clickCount >= (upgrade.cost * 2)
  );

  return (
      <div className="App">
          <img src="https://images.crazygames.com/click-click-clicker_16x9/20240206102255/click-click-clicker_16x9-cover?auto=format,compress&q=75&cs=strip" alt="Game Image" className="top-image" />
          <h1>Click Counter Game</h1>
          <div className="click-count">
              Clicks: {clickCount}
          </div>
          <CoinCounter count={clickCount} />
          <ClickedButton onClick={handleClick} />
          <UpgradeEffects 
              availableUpgrades={availableUpgrades} 
              handleUpgrade={handleUpgrade} 
              activeUpgrades={activeUpgrades} 
          />
      </div>
  );
};

export default App;
