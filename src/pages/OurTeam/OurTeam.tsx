import React from "react";
import style from "../OurTeam/OurTeam.module.scss";
import OurTemsPeopleComponent from "../../components/OurTeamPeople/OurtTeamPeople";

const OurTeam = () => {
  return (
    <div className={style.parentOurTeam}>
      <div className={style.bcgYellow}>
        <div className={style.blockTitleAndBtn}>
          <h1 className={style.title}>НАША КОМАНДА</h1>
        </div>
        <div
          style={{
            width: "85%",
            height: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <OurTemsPeopleComponent />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
