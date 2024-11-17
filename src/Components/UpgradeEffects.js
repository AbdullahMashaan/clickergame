import React from 'react';

const UpgradeEffects = ({ availableUpgrades, handleUpgrade }) => {
    return (
        <div className="upgrades">
            {availableUpgrades.map((upgrade, index) => (
                <div key={index} className="upgrade">
                    <p>{upgrade.name}: {upgrade.description} - Cost: {upgrade.cost} clicks</p>
                    <button onClick={() => handleUpgrade(upgrade)}>Use</button>
                </div>
            ))}
        </div>
    );
};

export default UpgradeEffects;
