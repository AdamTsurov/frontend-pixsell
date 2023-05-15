import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVacancy } from "../../reducers/Slice/vacancySlice";
import style from "../Vacancy/AboutVacancy.module.scss";
import { Link } from "react-router-dom";
import AcceptedWindow from "./AcceptedWindow";
import { postResponse } from "../../reducers/Slice/responseSlice";

const AboutVacancy = () => {
  const [acceptedWindow, setAcceptedWindow] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [jobApplicationForm, setJobApplicationForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    additionalComment: "",
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  const vacancy = useSelector((state) => state.vacancySlice.vacancy).find(
    (item) => item._id === id
  );

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const hundleJobFullName = (e) => {
    setJobApplicationForm({ ...jobApplicationForm, fullName: e.target.value });
  };
  const hundleJobEmail = (e) => {
    setJobApplicationForm({ ...jobApplicationForm, email: e.target.value });
  };
  const hundleJobPhoneNumber = (e) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      phoneNumber: e.target.value,
    });
  };
  const hundleJobAdditionalComment = (e) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      additionalComment: e.target.value,
    });
  };

  const handleChangeButton = (e) => {
    e.preventDefault();
    dispatch(postResponse({ ...jobApplicationForm }));
    setJobApplicationForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      additionalComment: "",
    });
  };

  const handlePrivacyPolicy = () => {
    setPrivacyPolicy(!privacyPolicy);
  };

  const handleClickWindow = () => {
    setAcceptedWindow(!acceptedWindow);
  };

  if (!vacancy) {
    return "";
  }
  return (
    <div className={style.mainDiv}>
      <div>
        {acceptedWindow && (
          <AcceptedWindow
            acceptedWindow={acceptedWindow}
            setAcceptedWindow={setAcceptedWindow}
          />
        )}
      </div>

      <div className={style.blockDescription}>
        <div className={style.mainBlock}>
          <Link to="/career">
            <button className={style.btnBack}>
              <div className={style.btnBackText}>НАЗАД</div>
              <svg
                width="95"
                height="16"
                viewBox="0 0 95 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29288C-0.0976333 7.68341 -0.0976334 8.31657 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 7.99999L8.07107 2.34314C8.46159 1.95261 8.46159 1.31945 8.07107 0.928925C7.68054 0.5384 7.04738 0.5384 6.65685 0.928924L0.292893 7.29288ZM95 7L1 6.99999L1 8.99999L95 9L95 7Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
          <h1 className={style.title}>{vacancy.name}</h1> <br />
          <div className={style.tasksWork}>{vacancy.tasksWork}</div> <br />
          <div className={style.vacancyDescription}>
            <b className={style.vacancyDescriptionTitle}>
              ЧЕМ ПРЕДСТОИТ ЗАНИМАТЬСЯ
            </b>
            <br />
            {vacancy.vacancyDescription}
          </div>{" "}
          <br />
          <div className={style.keyRequirements}>
            <b className={style.keyRequirementsTitle}>КЛЮЧЕВЫЕ ТРЕБОВАНИЯ</b>
            <br />
            {vacancy.keyRequirements}
          </div>{" "}
          <br />
          <div className={style.weOffer}>
            <b className={style.weOfferTitle}>МЫ ПРЕДЛАГАЕМ</b>
            <br />
            {vacancy.weOffer}
          </div>{" "}
          <br />
          <div className={style.wage}>{vacancy.wage}₽</div>
        </div>
      </div>

      <div className={style.blockRespond}>
        <form
          onSubmit={handleChangeButton}
          className={style.forms}
          type="submit"
        >
          <div className={style.centerBlockRespond}>
            <h1 className={style.titleRespond}>
              НАПИШИТЕ <br /> НАМ
            </h1>

            <div className={style.blockInp1}>
              <div className={style.inp1}>
                <input
                  value={jobApplicationForm.fullName}
                  type="text"
                  onChange={hundleJobFullName}
                  placeholder="ФИО"
                />
              </div>

              <div className={style.inp1}>
                <input
                  value={jobApplicationForm.email}
                  onChange={hundleJobEmail}
                  type="email"
                  placeholder="Электронная почта"
                />
              </div>

              <div className={style.inp1}>
                <input
                  value={jobApplicationForm.phoneNumber}
                  type="text"
                  onChange={hundleJobPhoneNumber}
                  placeholder="Телефон"
                />
              </div>
            </div>

            <div className={style.blockInp2}>
              <div className={style.inp22}>
                <div className={style.textInpFile}>Прикрепить резюме</div>
                <link
                  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <label className={style.inpScrepka} for="file">
                  <i class="fa fa-paperclip"></i>
                </label>
                <input placeholder="Прикрепить резюме" id="file" name="file" type="file" multiple hidden />
              </div>

              <div className={style.inp22}>
                <div className={style.textInpFile}>Прикрепить доп-ый файл</div>
                <link
                  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <label className={style.inpScrepka} for="file">
                  <i class="fa fa-paperclip"></i>
                </label>
                <input id="file" name="file" type="file" multiple hidden />
              </div>

              <div className={style.inp2}>
                <input
                  value={jobApplicationForm.additionalComment}
                  type="text"
                  onChange={hundleJobAdditionalComment}
                  placeholder="Дополнительный комментарий"
                />
              </div>
            </div>

            <div className={style.lastDiv}>
              <button
                className={style.btnSend}
                disabled={!privacyPolicy || !jobApplicationForm.email || !jobApplicationForm.fullName || !jobApplicationForm.phoneNumber }
                onClick={() => handleClickWindow()}
              >
                ОТПРАВИТЬ
                <svg
                  className={style.svg}
                  width="95"
                  height="16"
                  viewBox="0 0 95 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 7.29288C-0.0976333 7.68341 -0.0976334 8.31657 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6568L2.41422 7.99999L8.07107 2.34314C8.46159 1.95261 8.46159 1.31945 8.07107 0.928925C7.68054 0.5384 7.04738 0.5384 6.65685 0.928924L0.292893 7.29288ZM95 7L1 6.99999L1 8.99999L95 9L95 7Z"
                    fill="white"
                  />
                </svg>
              </button>

              <div className={style.blockCheckbox}>
                <input
                  className={style.checkbox}
                  type="checkbox"
                  onClick={() => handlePrivacyPolicy()}
                />

                <div className={style.textCheckbox}>
                  Я соглашаюсь с Правилами пользования <br /> и Политикой
                  конфиденциальности.
                </div>
              </div>
            </div>
          </div>
        </form>

        <a href="#top" className={style.aUpMain}>
          <button className={style.btnUpMain}>Вверх</button>
        </a>
      </div>
    </div>
  );
};

export default AboutVacancy;
