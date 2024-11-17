import React, { useState } from 'react';
import "../../../scss/statistic/_statisticCaffeineIntake.scss"; 
import arrow from '../../../assets/statistic/up_arrow.png'

const CaffeineIntake = () => {

    return (
        <div>
            <div className="caffeine-container">
                <div className="caffeine-amount-container">
                    <div className="caffeine-amount-label">오늘 카페인 섭취량☕️</div>
                    <div className="caffeine-amount">1500ML</div>
                </div>
                <div className="caffeine-detect-container">
                    <div className="caffeine-label">최근 카페인 섭취량이 더 늘어났어요!</div>
                    <div className="caffeine-suggest-label">내일은 카페인 대신 물 섭취를 권장드려요.</div>
                </div>
                <div className="caffeine-arrow-container">
                    <img src={arrow} alt="caffeine-arrow"/>
                </div>
            </div>
        </div>
    );
};

export default CaffeineIntake;