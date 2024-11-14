import React, { useCallback, useState, useEffect } from "react";
import MainPage from "./components/MainPage"; // 'MainPage'를 'Main'으로 import
import MainVanner from "./components/MainVanner";
import MainTop from "./components/MainTop";

const Index = () => {
  const [title, setTitle] = useState("물세레로 구원을 받으세요");
  const [todayWater, setTodayWater] = useState(0);

  // 목표량 설정 (예: 2000ml)
  const targetWater = 2000;

  // 물을 마셨을 때 호출하는 함수
  const drinkWater = useCallback(() => {
    setTodayWater((prev) => prev + 250); // 250ml씩 추가
  }, []);

  // // todayWater 상태에 따라 title을 업데이트
  // useEffect(() => {
  //   const progress = (todayWater / targetWater) * 100; // 목표량 대비 현재 섭취 비율 계산

  //   if (progress >= 100) {
  //     setTitle("물맨~");
  //   } else if (progress >= 40 && progress < 90) {
  //     setTitle("물의 기적이 일어나는 중입니다");
  //   } else {
  //     setTitle("물세레로 구원을 받으세요");
  //   }
  // }, [todayWater, targetWater]);

  return (
    <div>
      <MainPage> {/* MainPage는 Main으로 사용 */}
        <button onClick={drinkWater}>물 마시기</button> {/* 물을 마실 때마다 drinkWater 호출 */}
        <MainTop title={title} />
        <MainVanner />
        
      </MainPage>
    </div>
  );
};

export default Index;