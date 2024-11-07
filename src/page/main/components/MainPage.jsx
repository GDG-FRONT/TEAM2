import React from "react";
import MainTop from "./MainTop";
import MainVanner from "./MainVanner";
import "../../../scss/main/_mainPage.scss";

// MainPage 컴포넌트를 함수형으로 정의
const MainPage = () => {
    return (
        <div className="main-page">
            <MainTop />
            <MainVanner />
        </div>
    );
}

export default MainPage;