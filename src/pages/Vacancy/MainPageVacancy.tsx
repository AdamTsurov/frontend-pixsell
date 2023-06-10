import React, { useState } from "react";
import style from "./MainPageVacancy.module.scss";
import light from "./images/main-light.png";
import arrow from "./images/Arrow.svg";
import SectionOne from "../../components/CareerComponents/MainPageVacancyComponent/SectionOne";
import MainPageVacancySectionTwo from "../../components/CareerComponents/MainPageVacancyComponent/MainPageVacancySectionTwo";

const MainPageVacancy = () => {
  const arrNavigateButtons = [
    { text: "Карьера", id: "mainPageVacancy" },
    { text: "Вакансии", id: "main_vacancy" },
    { text: "Последние проекты", id: "mainJoboBenefits" },
  ];
  const [sideBarItems, setSideBarItems] = useState(0);

  return (
    <div id="mainPageVacancy" className={style.main}>
      <SectionOne arrow={arrow} />
      <MainPageVacancySectionTwo
        light={light}
        setSideBarItems={setSideBarItems}
        sideBarItems={sideBarItems}
        arrNavigateButtons={arrNavigateButtons}
      />
    </div>
  );
};

export default MainPageVacancy;
