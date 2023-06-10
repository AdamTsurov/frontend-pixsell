import React, { ChangeEvent, FormEvent, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import style from "../Enter/Enter.module.scss";
import { authSignIn } from "../../../reducers/Slice/registrationSlice";
import { useAppDispatch, useAppSelector } from "../../../reducers/store/hookRedux";


interface PropsEnter {
  setRegistration: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setEnterWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Enter = ({
  setRegistration,
  setEnterWindow,
  setAccountWindow,
}: PropsEnter) => {
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleEnter = () => {
    setEnterWindow(false);
  };

  const handleRegistration = () => {
    setEnterWindow(false);
    setRegistration(true);
  };

  const handleEnterAccount = () => {
    setAccountWindow(true);
  };

  const error = useAppSelector((state) => state.registrationReducer.error);

  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSetLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleMouseDownPassword = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  function checkEmail(value: string) {
    const emailRegExp = /\S+@\S+\.\S+/;
    const isEmail = emailRegExp.test(value);
    const type = isEmail ? "email" : "nickName";
    return type;
  }
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkEmail(value) === "email") {
      dispatch(authSignIn({ nickName: "", email: value, password: password }));
    } else {
      dispatch(authSignIn({ nickName: value, email: "", password: password }));
    }
    if (error) {
      return <div>{error}</div>;
    }
  };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.registrationDiv}>
          <div className={style.divX}>
            <button onClick={() => handleEnter()}>X</button>
          </div>
          <div className={style.registrationTitle}>Авторизация</div>
          <form onSubmit={handleSignIn}>
            <div className={style.login}>
              <Input
                type="text"
                value={value}
                placeholder="Введите логин, либо эмайл"
                onChange={handleSetLogin}
              />
            </div>
            <div className={style.password}>
              <Input
                placeholder="Введите пароль"
                type={values.showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            <div className={style.enterButtonDiv}>
              <button onClick={() => handleRegistration()}>
                Зарегистрироваться
              </button>
              <div className={style.errors}>{error}</div>
              <button type="submit" onClick={() => handleEnterAccount()}>
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enter;
