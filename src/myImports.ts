import style from "./App.module.scss";
import Contacts from "./pages/Contacts/Contacts";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import AboutVacancy from "./pages/Vacancy/AboutVacancy";
import { Routes, Route } from "react-router-dom";
import VacancyMain from "./pages/Vacancy/VacancyMain";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Registration from "./components/Header/Registration/Registration";
import AboutGame from "./pages/Games/AboutGame";
import Enter from "./components/Header/Enter/Enter";
import PersonalAccountWindow from "./components/Header/PersonalAccount/PersonalAccountWindow";
import Basket from "./pages/Basket/Basket";
import MyFavoritesGames from "./pages/Games/MyGames/myGame";

import { useState } from "react";

export {
  Contacts,
  useState,
  MainPage,
  style,
  AboutGame,
  Footer,
  Header,
  GamePages,
  AboutCompany,
  Route,
  Routes,
  AboutVacancy,
  VacancyMain,
  Enter,
  Registration,
  PersonalAccountWindow,
  Basket,
  MyFavoritesGames,
};
