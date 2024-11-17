import React from 'react';

const CoinCounter = ({ count }) => {
    return (
        <div className="coin-counter">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ssCnkNWb6Fc1vX-MrriJpGvlqL0qoGROaQ&s" alt="Coin" className="coin-image" />
            <p>x {count}</p>
        </div>
    );
};

export default CoinCounter;
