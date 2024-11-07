import React from "react";
import MainPage from "./components/MainPage"; // 'MainPage'는 'Main'으로 import
import MainVanner from "./components/MainVanner";
import MainTop from "./components/MainTop";

const index = () => {
  return (
    <div>
      <MainPage> {/* MainPage는 Main으로 사용 */}
        <MainTop />
        <MainVanner />
      </MainPage>
    </div>
  );
};

export default index;