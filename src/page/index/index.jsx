import React, { useState, useEffect } from "react";
import FirstLoding from "./components/FirstLoding";
import Weight from "./components/WeightInput";
import "../../scss/index/FirstLoding.scss"

const Index = () => {
  const [showFirstLoading, setShowFirstLoading] = useState(true);

  useEffect(() => {
    // 2초 후에 showFirstLoading을 false로 변경
    const timer = setTimeout(() => {
      setShowFirstLoading(false);
    }, 2000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro">
      {showFirstLoading ? <div className="loding-background"><FirstLoding /> </div>
      : <Weight />}
    </div>
  );
};

export default Index;
