import SocialNetwork from "../SocialNetwork/SocialNetwork";
import style from './LeftSideComponent.module.scss'
function LeftSideComponent() {
    return ( <>
     <div className={style.leftSide}>
          <SocialNetwork />
          <div className={style.textBlock}>
            <h1>О КОМПАНИИ</h1>
            <p>Pixsell - это компания-разработчик и издатель мобильных игр.</p>
            <p>
              Мы работаем небольшими командами - это позволяет оставаться
              гибкими и быстро подстраиваться под потребности наших игроков. На
              каждом этапе - начиная с детального разбора идеи, заканчивая
              реализацией игровых механик и геймплея - мы ориентируемся на наших
              пользователей. Просто потому, что сами играем.
            </p>
            <p>
              Также мы помогаем другим студиям разработки реализовывать свои
              идеи: поможем протестировать идеи и прототипы, а хит - издадим на
              полностью прозрачных и вкусных условиях.
            </p>
          </div>
        </div>
    </> );
}

export default LeftSideComponent;