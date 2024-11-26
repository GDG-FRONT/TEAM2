import React, { useState, useEffect } from 'react';
import FirstLoding from '../setup/pages/InitialLoadingScreen';
import Weight from '../setup/pages/WeightInput';
import Age from '../setup/pages/AgeInput';
import Weather from '../setup/pages/WeatherInput';
import '../../scss/index/FirstLoding.scss';

const Index = () => {
  const [showFirstLoading, setShowFirstLoading] = useState(true);
  const [showWeight, setShowWeight] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    // 2초 후에 FirstLoding 상태를 false로 변경
    const firstLoadingTimer = setTimeout(() => {
      setShowFirstLoading(false);
      setShowWeight(true); // Weight 화면 표시
    }, 2000);

    return () => clearTimeout(firstLoadingTimer); // 타이머 정리
  }, []);

  const handleWeightDone = () => {
    setShowWeight(false);
    setShowWeather(true); // Weight 이후 Weather 화면 표시
  };

  return (
    <div className="intro">
      {showFirstLoading ? (
        <div className="loding-background">
          <FirstLoding />
        </div>
      ) : showWeight ? (
        <Weight onDone={handleWeightDone} />
      ) : showAge? (
        <Age onDone={handleAgeDone} />
      ) : showWeather ? (
        <Weather />
      ) : null}
    </div>
  );
};

export default Index;
