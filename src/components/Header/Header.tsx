
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import IronMan from "./photos/output-onlinegiftools.gif";
import { ReactComponent as Basket } from "./files/Basket.svg";
import { useAppSelector } from "../../reducers/store/hookRedux";


interface PropsHeader {
  setRegistration: React.Dispatch<React.SetStateAction<boolean>>;
  setEnterWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header =  ({
  setRegistration,
  setEnterWindow,
  setAccountWindow,
}: PropsHeader) => {
  const token = useAppSelector((state) => state.registrationReducer.token);

  const handleClickRegistration = () => {
    if (!token) {
      setEnterWindow(false);
      setRegistration(true);
    } else {
      setAccountWindow(true);
    }
  };

  return (
    <div className={style.header}>
      <div>
        <div className={style.toyStream}>
          
        </div>
      </div>
      <div className={style.textMenu}>
        <div className={style.links}>
          <Link to="/" relative="path">
            <button className={style.BtnLink}>Главная</button>
          </Link>
          <Link to="/compain">
            <button className={style.BtnLink}>Компания</button>
          </Link>
          <Link to="/games">
            <button className={style.BtnLink}>Игры</button>
          </Link>
          <Link to="/career">
            <button className={style.BtnLink}>Карьера</button>
          </Link>
          <Link to="/news">
            <button className={style.BtnLink}>Новости</button>
          </Link>
          <Link to="/contacts">
            <button className={style.BtnLink}>Контакты</button>
          </Link>
          <Link to="/basket">
            <button className={style.BtnLink}>
              {" "}
              <Basket className={style.basket} />
              {/* <img className={style.basket} src={Basket} alt="" /> */}
            </button>
          </Link>
        </div>

        <button
          onClick={() => handleClickRegistration()}
          className={style.language}
        >
          <p className={style.btnLangiage}>
            <img src={IronMan} alt="Железный Человек" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
