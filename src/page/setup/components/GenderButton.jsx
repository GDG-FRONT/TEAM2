import React, { useState } from 'react';
import "../../../scss/setup/_setupGenderButton.scss"; 
import male from '../../../assets/setup/Male_deactivated.png';
import maleActive from '../../../assets/setup/Male_activated.png';
import female from '../../../assets/setup/Female_deactivated.png';
import femaleActive from '../../../assets/setup/Female_activated.png';

const GenderButton = ({onSelectGender}) => {
    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (gender) => {
        setActiveTab(gender);
        onSelectGender(gender); // 부모 컴포넌트에 선택된 성별 전달
    };

    return (
        <div className="gender-button-container">
            <div className="gender-button-tab-container">
                <button 
                    className={`gender-button-tab-button ${activeTab === '남자' ? 'active' : ''}`}
                    onClick={() => handleClick('남자')}
                >
                    남자
                    <img src={activeTab === '남자' ? maleActive : male} alt="남자"/>
                </button>
                <button 
                    className={`gender-button-tab-button ${activeTab === '여자' ? 'active' : ''}`}
                    onClick={() => handleClick('여자')}
                >
                    여자
                    <img src={activeTab === '여자' ? femaleActive : female} alt="여자"/>
                </button>
            </div>
        </div>
    );
};

export default GenderButton;