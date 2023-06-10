import SocialNetwork from "../../SocialNetwork/SocialNetwork";
import style from "./SectionOne.module.scss";

function SectionOne({ arrow }: {arrow: string}) {
  return (
    <div className={style.sectionOne}>
      <div className={style.socialNetworkLogos}>
        <SocialNetwork />
      </div>
      <a href="#mainPageVacancy" className={style.aUpMain}>
        <button className={style.btnUpMain}>Вверх</button>
      </a>
      <div className={style.deskriptionDevelopers}>
        <p className={style.game}>Карьера в Pixell</p>
        <p className={style.text}>
          Мы всегда рады новым высококлассным специалистам геймдева, желающим
          присоединиться к нашей команде.
        </p>
        <div>
          <a className={style.AOurWorks} href="#main_vacancy">
            <button className={style.BtnOurWorks}>
              Вакансии
              <img className={style.arrow} src={arrow} alt="f" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
