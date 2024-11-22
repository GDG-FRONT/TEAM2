import React from 'react';
import "../../../scss/setup/_setupStatusButton.scss"; 
import status from '../../../assets/setup/status_page_1.svg';

const StatusButton = ({ isActive, onClick }) => {
    return (
        <div className="status-button-container">
            <img className="status-img" src={status} alt="status"/>
            <button 
                className={`next-button ${isActive ? 'active' : ''}`}
                disabled={!isActive}
                onClick={onClick}
            >
                다음
            </button>
        </div>
    );
};

export default StatusButton;