import React from 'react';

const Header = function (props) {
    return (
        <div className="header">
            <h1>Notepad</h1>
            <button className="clearll" onClick={props.clearAllButton}>Clear All</button>
        </div>
    );
};

export default Header;