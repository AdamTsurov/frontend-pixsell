import React, { useState } from "react";
import style from "./GamesList.module.scss";
import arrow2 from "./photos/Arrow2.svg";
import { fetchGames } from "../../reducers/Slice/GamesList";
import { useEffect } from "react";
import ButtonsPoginationComponent from "../../components/Games/GamesListComponents/ButtonsPoginationComponent";
import FirstBlockData from "../../components/Games/GamesData/FirstBlockData";
import SecondBlockData from "../../components/Games/GamesData/SecondBlockData";
import { useAppDispatch, useAppSelector } from "../../reducers/store/hookRedux";

const GamesList = () => {
  const dispatch = useAppDispatch();

  const games = useAppSelector((state) => state.gameReducer.game);
  const error = useAppSelector((state) => state.gameReducer.error);
  const loadings = useAppSelector((state) => state.gameReducer.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGames(page));
  }, [dispatch, page]);

  return (
    <div className={style.main}>
      {loadings ? <div className={style.custom_loader}></div> : null}
      <div className={style.manLists}>
        {error ? <h1>{error}</h1> : null}

        {games.map((item, index) => {
          if (index % 2 === 0) {
            return <FirstBlockData key={index} arrow2={arrow2} item={item} />;
          } else if (index % 2 !== 0) {
            return <SecondBlockData  key={index} arrow2={arrow2} item={item} />;
          }
        })}
        <ButtonsPoginationComponent page={page} setPage={setPage} />
        <div className={style.moreProjects}>
          <button className={style.btnMoreProjects}>Больше проектов</button>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
