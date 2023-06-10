import img1 from '../../pages/AboutCompany/files/Frame.svg'
import img2 from '../../pages/AboutCompany/files/Frame2.svg'
import img3 from '../../pages/AboutCompany/files/Frame3.svg'
import img4 from '../../pages/AboutCompany/files/Frame4.svg'


import style from './RightSideComponent.module.scss'
function RightSideComponent() {
    return ( <>
      <div className={style.rightSide}>
          <div className={style.iconBlock}>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img1} alt="" />
              </div>
              <div className={style.text}>
                <h3>2млрд+</h3>
                <p>Установок</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img2} alt="" />
              </div>
              <div className={style.text}>
                <h3>500млн++</h3>
                <p>Игроков</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img3} alt="" />
              </div>
              <div className={style.text}>
                <h3>250млн+</h3>
                <p>Активных юзеров в месяц</p>
              </div>
            </div>
            <div className={style.block}>
              <div className={style.iconShadow}>
                <img src={img4} alt="" />
              </div>
              <div className={style.text}>
                <h3>500+</h3>
                <p>Сотрудников</p>
              </div>
            </div>
          </div>
          <div className={style.cubes}>
            <div className={style.text}>
              <a className={style.aHrefs} href="#first">
                {" "}
                О СТУДИИ <span className={style.cube}></span>{" "}
              </a>
            </div>
            <div className={style.text}>
              <a className={style.aHrefs} href="#second">
                {" "}
                КОМАНДА <span className={style.cube}></span>{" "}
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
    </> );
}

export default RightSideComponent;