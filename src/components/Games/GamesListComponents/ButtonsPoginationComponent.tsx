import style from './ButtonsPoginationComponent.module.scss'

interface ButtonsPoginationComponentProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number
}

function ButtonsPoginationComponent({setPage, page}: ButtonsPoginationComponentProps) {
    return ( <>
     <div className={style.ButtonsPogination}>
          <button
            className={style.BtnPogination}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {" "}
            назад{" "}
          </button>
          <button
            className={style.BtnPogination}
            disabled={page === 5}
            onClick={() => setPage(page + 1)}
          >
            {" "}
            вперед
          </button>
        </div>
    </> );
}

export default ButtonsPoginationComponent;