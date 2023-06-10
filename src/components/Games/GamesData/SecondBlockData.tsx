import { Link } from "react-router-dom";
import style from "./SecondBlockData.module.scss";

interface GameDataObject {
  _id: string;
  images: Array<string>;
  name: string;
  description: string;
  publisher: string;
}

function SecondBlockData({
  item,
  arrow2,
}: {
  item: GameDataObject;
  arrow2: string;
}) {
  return (
    <>
      <div key={item._id} className={style.secondBlockData}>
        <div className={style.RoditelImg}>
          <img
            className={style.game1}
            src={`http://localhost:3001/${item.images[0]}`}
            alt="a"
          />
        </div>
        <div className={style.secondBlock}>
          <div className={style.description}>
            <p className={style.title}>{item.name}</p>
            <p className={style.motivation}>{item.publisher}</p>
            <p className={style.text}>{item.description}</p>
            <Link className="text-decoration-none" to={`/games/${item._id}`}>
              <button className={style.btn}>
                Подробнее
                <img src={arrow2} alt="d" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondBlockData;
