import React from 'react';

const ClickedButton = ({ onClick }) => {
    return (
        <button className="red-button" onClick={onClick}>Click Me!</button>
    );
};

export default ClickedButton;
