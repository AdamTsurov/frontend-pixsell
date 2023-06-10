import React from "react";
import style from "../AboutCompany/AboutCompany.module.scss";
import OurTeam from "../OurTeam/OurTeam";
import LeftSideComponent from "../../components/AboutCompanyComponents/LeftSide";
import RightSideComponent from "../../components/AboutCompanyComponents/RightSide";

const AboutCompany = () => {
  return (
    <div id="first" className={style.aboutAndOurTeam}>
      <div className={style.mainParent}>
        <LeftSideComponent />
        <RightSideComponent />
      </div>
      <div id="second">
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutCompany;
