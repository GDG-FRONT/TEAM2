import React, { useState, useEffect } from 'react';
import FirstLoding from './pages/InitialLoadingScreen';
import Weight from './pages/WeightInput';
import Weather from './pages/WeatherInput';
import ChooseGender from './pages/GenderInput';
import ChooseAge from './pages/SetupAge'

import '../../scss/index/FirstLoding.scss';
import AGE from './pages/AgeInput';

const Index = () => {
  const [showFirstLoading, setShowFirstLoading] = useState(true);
  const [showWeight, setShowWeight] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showChooseAge, setShowChooseAge] = useState(false);
  const [showChooseGender, setShowChooseGender] = useState(false);
  const [showAge, setShowAge] = useState(false);

  useEffect(() => {
    // 2초 후에 FirstLoding(최초 로딩 화면) 상태를 false로 변경
    const firstLoadingTimer = setTimeout(() => {
      setShowFirstLoading(false);
      setShowChooseGender(true); // 성별 선택 화면 표시
    }, 2000);

    return () => clearTimeout(firstLoadingTimer); // 타이머 정리
  }, []);

  // 1. 성별 선택 완료 -> 몸무게 선택 창 출력
  const handleGenderDone = () => {
    setShowChooseGender(false);
    setShowWeight(true);
  }
  // 2. 몸무게 선택 완료 -> 나이 선택 창 출력
  const handleWeightDone = () => {
    setShowWeight(false);
    setShowAge(true);
  };

  // 3. 65세 이상인가요? 선택 완료 -> 날씨 선택 창 출력
  const handleAgeDone = () => {
    setShowAge(false);
    setShowWeather(true);
  }

  // 4. 날씨 선택 완료 -> 메인 페이지 출력

  
  return (
    <div className="intro">
      {showFirstLoading ? (
        <div className="loding-background">
          <FirstLoding />
        </div>
      ) : showChooseGender ? (
        <ChooseGender onDone={handleGenderDone} />
      ) : showWeight ? (
        <Weight onDone={handleWeightDone} />
      ) : showChooseAge ? (
        <ChooseAge onDone={handleAgeDone} />
      ) : showWeather ? (
        <Weather />
      ) : null}
    </div>
  );
};

export default Index;