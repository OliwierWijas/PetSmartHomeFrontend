import React from 'react';
import '../App.css';

function MenuItem({ label, onClick, icon }) {
    return (
        <button className="menu-item" onClick={onClick}>
            {icon && <span className="menu-icon">{icon}</span>}
            <span>{label}</span>
        </button>
    );
}

export default MenuItem;
