import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getUsers } from "../../../reducers/Slice/registrationSlice";
import MyVerticallyCenteredModal from "../../WalletModal";
import style from "../PersonalAccount/PersonalAccountWindow.module.scss";
import { useAppDispatch, useAppSelector } from "../../../reducers/store/hookRedux";

interface PropsPersonalAccoutnWindow {
  setAccountWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonalAccountWindow = ({setAccountWindow}: PropsPersonalAccoutnWindow) => {
 
  const handleEnter = () => {
    setAccountWindow(false);
  };

  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [dispatch])

  const userID = useAppSelector((state) => state?.registrationReducer?.userID?.id);
  const users = useAppSelector((state) => state?.registrationReducer?.users);
  if (!users) {
    return <h1>"Loading..."</h1>;
  }
  // state?.registrationReducer?.userID?.id
  const currentUser = users.find((item) => item?._id === userID);
  // console.log("USER", currentUser);
  // console.log(userID);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.accountMainDiv}>
          <div className={style.logOutWindow}>
            <button onClick={() => handleEnter()}>X</button>
          </div>
          <div className={style.userName}>Добро пожаловать: </div>
          <div className={style.walletDiv}>
            <p>Сумма в кошельке: {currentUser?.walletAmount} </p>
            <button onClick={() => setModalShow(true)}>
              Пополнение кошелька
            </button>
            {
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            }
          </div>
          <div className={style.myGamesButton}>
            <button>
              <Link className={style.myGamesButtons} to="/mygames">
                Мои игры
              </Link>
            </button>
          </div>
          <div className={style.logOutButton}>
            <button onClick={logout}>Выход из аккаунта</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountWindow;
