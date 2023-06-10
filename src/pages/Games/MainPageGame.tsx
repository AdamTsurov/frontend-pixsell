import React from "react";
import adamPhoto from "./photos/adam.png";
import style from "./Main.module.scss";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import SidebarListComponent from "../../components/MyGamesComponents/MainPageComponent/SidebarList";
import DeskriptionDevelopersComponent from "../../components/MyGamesComponents/DeskriptionDevelopers/DeskriptionDevelopers";

const MainPageGame = () => {
  return (
    <div id="mainPage" className={style.main}>
      <div className={style.sectionOne}>
        <div className={style.socialNetworkLogos}>
          <SocialNetwork />
        </div>
        <DeskriptionDevelopersComponent />
      </div>
      <div className={style.sectionTwo}>
        <img className={style.adamPhoto} src={adamPhoto} alt="adam" />
        <SidebarListComponent />
      </div>
    </div>
  );
};

export default MainPageGame;
