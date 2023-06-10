import React from "react";
import JobBenefits from "../../components/VacancyComponents/JobBenefits/JobBenefits";
import MainPageVacancy from "./MainPageVacancy";
import VacancyList from "../../components/VacancyComponents/VacancyList/VacancyList";

const VacancyMain = () => {
  return (
    <>
      <MainPageVacancy />
      <VacancyList />
      <JobBenefits />
    </>
  );
};

export default VacancyMain;
