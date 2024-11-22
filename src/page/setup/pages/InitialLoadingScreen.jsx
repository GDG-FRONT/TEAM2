import React from "react";
import bottom_wave_w from "../../../assets/index/bottom-wave-w.svg";
import bottom_wave_b from "../../../assets/index/bottom-wave-b.svg";
import small_ship from "../../../assets/index/small-ship.svg";
const FirstLoding = () => {
    return(
        <div className="loding-background">
            <div className="index-title">물렐루야!</div>
            <img src={small_ship} alt="배 사진" className="small-siap"></img>
            <img src={bottom_wave_w} alt="흰 파도" className="bottom-wave-w"></img>
            <img src={bottom_wave_b} alt="파란 파도" className="bottom-wave-b"></img>
        </div>
    );
}

export default FirstLoding;