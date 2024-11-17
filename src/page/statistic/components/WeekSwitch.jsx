import React, { useState } from 'react';
import "../../../scss/statistic/_statisticWeekSwitch.scss"; 

const WeekSwitch = () => {
    const [activeTab, setActiveTab] = useState('일');

    return (
        <div className="container">
            <div className="tab-container">
                <button 
                    className={`tab-button ${activeTab === '일' ? 'active' : ''}`}
                    onClick={() => setActiveTab('일')}
                >
                    일
                </button>
                <button 
                    className={`tab-button ${activeTab === '주' ? 'active' : ''}`}
                    onClick={() => setActiveTab('주')}
                >
                    주
                </button>
            </div>
        </div>
    );
};

export default WeekSwitch;