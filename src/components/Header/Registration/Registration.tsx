import React, { useState } from "react";

import Input from "@material-ui/core/Input";
import style from "../Registration/Registration.module.scss";
import { authSignUp } from "../../../reducers/Slice/registrationSlice";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useAppDispatch, useAppSelector } from "../../../reducers/store/hookRedux";

interface PropsRegistration {
  setRegistration: React.Dispatch<React.SetStateAction<boolean>>;
  setEnterWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registration = ({
  setRegistration,
  setEnterWindow,
}: PropsRegistration) => {
  const [nickName, setNickName] = useState("");
  const [usersName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [blur, setBlur] = useState(false);
  const [sended, setSended] = useState(false);

  const error = useAppSelector((state) => state.registrationReducer.error);

  const dispatch = useAppDispatch();

  const handlebtnLogin = () => {
    setEnterWindow(true);
    setRegistration(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ nickName, email, usersName, password }));
    setBlur(false);
  };

  const handleEnter = () => {
    setRegistration(false);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleBlur = () => {
    setBlur(true);
    setSended(false);
  };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.registrationDiv}>
          <div className={style.divX}>
            <button onClick={() => handleEnter()}>X</button>
          </div>
          <div className={style.registrationTitle}>Регистрация</div>
          <form onSubmit={handleSignUp}>
            <div className={style.logins}>
              <Input
                type="text"
                value={nickName}
                placeholder="Введите логин"
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <div className={style.nameUser}>
              <Input
                type="text"
                value={usersName}
                placeholder="Введите имя"
                onChange={(e) => setUsersName(e.target.value)}
              />
            </div>
            <div className={style.emails}>
              <Input
                type="text"
                value={email}
                placeholder="Введите электронную почту"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.passwords}>
              <Input
                placeholder="Введите пароль"
                value={password}
                type={values.showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className={style.regButton}>
              <button
                type="submit"
                onBlur={handleBlur}
                disabled={!nickName || !usersName || !password || !email}
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
          <div className={style.enterButtonDiv}>
            <div>{error}</div>
            <div className={style.enterButtonText}>Уже есть аккаунт?</div>
            <button onClick={() => handlebtnLogin()}>Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
