import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Edit } from "../assets/footer/footeredit.svg";
import { ReactComponent as ActiveEdit } from "../assets/footer/ActiveEdit.svg";
import { ReactComponent as ActiveUp } from "../assets/footer/Activetrendingup.svg";
import { ReactComponent as Up } from "../assets/footer/trendingup.svg";
import { ReactComponent as Union } from "../assets/footer/Union.svg";
import { ReactComponent as ActiveUnion } from "../assets/footer/ActiveUnion.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <div className="footer-container">
      <div className="footer-item-container">
        <div
          className={`footer-item footer-item-left ${
            path === "/" ? "active" : ""
          }`}
          onClick={() => {
            navigate("main");
          }}
        >
          {path === "main" ? <ActiveUnion /> : <Union />}
          물기도문
        </div>
        <div
          className={`footer-item ${path === "/record" ? "active" : ""}`}
          onClick={() => {
            navigate("/record");
          }}
        >
          {path === "/record" || path === "/drinkrecord" ? (
            <ActiveEdit />
          ) : (
            <Edit />
          )}
          세례기록
        </div>

        <div
          className={`footer-item footer-item-right ${
            path === "/statistic" ? "active" : ""
          }`}
          onClick={() => {
            navigate("/statistic");
          }}
        >
          {path === "/statistic" || path === "/week" ? <ActiveUp /> : <Up />}
          통계
        </div>
      </div>
    </div>
  );
};

export default Footer;
