import {
  Contacts,
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
  useState,
  PersonalAccountWindow,
  Basket,
  MyFavoritesGames,
} from "./myImports";

function App() {
  const [enterWindow, setEnterWindow] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [accountWindow, setAccountWindow] = useState(false);

  return (
    <div className={style.app}>
      <Header
        setAccountWindow={setAccountWindow}
        setRegistration={setRegistration}
        setEnterWindow={setEnterWindow}
      />
      {enterWindow ? (
        <div className={style.enterWindow}>
          <Enter
            setAccountWindow={setAccountWindow}
            setRegistration={setRegistration}
            setEnterWindow={setEnterWindow}
          />
        </div>
      ) : null}
      {registration ? (
        <div className={style.enterWindow}>
          <Registration
            setRegistration={setRegistration}
            setEnterWindow={setEnterWindow}
          />
        </div>
      ) : null}
      {accountWindow ? (
        <div className={style.setAccountWindow}>
          <PersonalAccountWindow setAccountWindow={setAccountWindow} />
        </div>
      ) : null}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamePages />} />
        <Route path="/compain" element={<AboutCompany />} />
        <Route path="/career" element={<VacancyMain />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutVacancy/:id" element={<AboutVacancy />} />
        <Route path="/games/:gameId" element={<AboutGame />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/account"
          element={
            <PersonalAccountWindow setAccountWindow={setAccountWindow} />
          }
        />
        <Route path="mygames" element={<MyFavoritesGames />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
