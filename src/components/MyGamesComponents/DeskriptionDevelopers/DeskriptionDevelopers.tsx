import style from './DeskriptionDevelopersComponent.module.scss'
import arrow from "../../../pages/Games/photos/Arrow.svg";

function DeskriptionDevelopersComponent() {
    return ( <>
    <div className={style.deskriptionDevelopers}>
          <p className={style.game}>игры</p>
          <p className={style.text}>
            Pixell сегодня — это команда из более 500 человек и офисы по
            всему миру. Мы входим в топ-10 игровых разработчиков по установкам —
            общее количество загрузок перевалило за 2 млрд, а ежемесячная
            аудитория составляет более 250 млн игроков.
          </p>
          <p className={style.text}>
            В разработке у нас всегда находится более десяти проектов
            одновременно. Мы постоянно экспериментируем, ищем новые тренды и
            пробуем себя в новых жанрах.
          </p>
          <div>
            <a className={style.BtnOurWorks} href="#gameList">
              <button className={style.BtnOurWorks}>
                Смотреть наши работы
                <img className={style.arrow} src={arrow} alt="f" />
              </button>
            </a>
          </div>
        </div>
    </> );
}

export default DeskriptionDevelopersComponent;