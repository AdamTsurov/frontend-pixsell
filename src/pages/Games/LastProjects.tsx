import React from "react";
import style from "./LastProducts.module.scss";
import arrow2 from "./photos/miniArrow2.svg";
import mask from "./photos//Mask.svg";
import photo1 from "./photos/game1.png";
import photo2 from "./photos/game2.png";
import photo3 from "./photos/game3.png";
import arrow from "./photos/Arrow 3.svg";

const LastProjects = () => {
  const recommendedGames = [
    {
      photo: photo1,
      name: "Escape Masters",
      titleCard: "Совершите идеальный побег",
      text: "Спаси напарников, собери сокровища и прокопай путь к свободе, но опасайся ловушек, людей и Адама прочих усатых человеков",
    },
    {
      photo: photo2,
      name: "DESIGN MASTERS",
      titleCard: "Станьте дизайнером интерьеров!",
      text: " Проходите уровни матч-3, создавайте собственные дизайны и интерьеры, следите за историей и знакомьтесь с персонажами.",
    },
    {
      photo: photo3,
      name: "Perfect Makeup 3D",
      titleCard: "Добро пожаловать в мир макияжа!",
      text: "  Выбирайте кисти, цвета и оттенки губной помады, подводки для глаз, чтобы добиться превосходного результата.",
    },
  ];

  return (
    <div className={style.LastProjects}>
      <div className={style.title}>
        {/* <p>Последние проекты</p> */}
        <div className={style.arrows}>
          <div className={style.arrow2}>
            <img className={style.Arrow2} src={arrow2} alt="f" />
          </div>
          <div className={style.arrow1}>
            <img className={style.Arrow1} src={mask} alt="dd" />
          </div>
        </div>
      </div>
      

      <div className={style.firstBlockData}>
        {recommendedGames.map((item, index) => {
          return (
            <div key={index} className={style.description}>
              <div className={style.firstBlock}>
                <img className={style.photo} src={item.photo} alt="d" />
                <p className={style.name}>{item.name}</p>
                <p className={style.titleCard}>{item.titleCard}</p>
                <p className={style.text}>{item.text}</p>
                <button className={style.onebtn}>
                  {" "}
                  Подробнее
                  <img className={style.arrow} src={arrow} alt="f" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastProjects;
