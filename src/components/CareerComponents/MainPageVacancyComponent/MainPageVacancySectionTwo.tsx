import style from "./MainPageVacancySectionTwo.module.scss";

interface arrNavigateButtonsProps {
  text: string;
  id: string;
}
interface MainPageVacancySectionTwoProps {
  setSideBarItems: React.Dispatch<React.SetStateAction<number>>;
  sideBarItems: number;
  light: string;
  arrNavigateButtons: Array<arrNavigateButtonsProps>;
}

function MainPageVacancySectionTwo({
  setSideBarItems,
  sideBarItems,
  light,
  arrNavigateButtons,
}: MainPageVacancySectionTwoProps) {
  return (
    <>
      <div className={style.sectionTwo}>
        <img className={style.light} src={light} alt="light" />
        <ul className={style.sidebar_list}>
          {arrNavigateButtons.map((item, index) => (
            <li className={style.sidebar_items} key={index}>
              <a
                onClick={() => setSideBarItems(index)}
                className={style.aHrefs}
                href={"#" + item.id}
              >
                {item.text}
              </a>
              <span
                className={
                  sideBarItems === index
                    ? `${style.sidebar_square}`
                    : `${style.sideBarTrue}`
                }
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MainPageVacancySectionTwo;
