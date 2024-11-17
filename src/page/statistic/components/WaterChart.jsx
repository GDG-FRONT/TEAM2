import React, { useState } from 'react';
import "../../../scss/statistic/_statisticWaterChart.scss"; 
import chart from '../../../assets/statistic/chart.png'

const WaterChart = () => {
    return (
        <div>
            <div className="chart-container">
                <div className="chart-title-container">
                    <div className="chart-title">오늘</div>
                </div>
                <div className="Water-title-container">
                    <div className="chart-label">시간별 받은 물세례💧</div>
                    <div className="water-amount">1500ML</div>
                </div>
                <img src={chart} alt="chart"/>
            </div>
        </div>
    );
};

export default WaterChart;