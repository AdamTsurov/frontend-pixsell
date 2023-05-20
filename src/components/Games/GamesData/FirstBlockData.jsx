
import { Link } from 'react-router-dom';
import style from './FirstBlockData.module.scss'

function FirstBlockData({item,  arrow2} ) {
    return ( <>
     <div key={item._id} className={style.firstBlockData}>
                <div className={style.firstBlock}>
                  <div className={style.description}>
                    <p className={style.title}>{item.name}</p>
                    <p className={style.motivation}>{item.publisher}</p>

                    <p className={style.text}>{item.description}</p>
                    <Link
                      className="text-decoration-none"
                      to={`/games/${item._id}`}
                    >
                      <button className={style.btn}>
                        Подробнее
                        <img src={arrow2} alt="d" />
                      </button>
                    </Link>
                  </div>
                  <div className={style.RoditelImg}>
                    <img
                      className={style.game1}
                      src={`http://localhost:3001/${item.images[0]}`}
                      alt="a"
                    />
                  </div>
                </div>
              </div>
    </> );
}

export default FirstBlockData;