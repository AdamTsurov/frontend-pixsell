import { useState } from "react";
import style from './SidebarListComponent.module.scss'
function SidebarListComponent() {
    const arr = [
        { text: "Игры", id: "mainPage" },
        { text: "Наши работы", id: "gameList" },
        { text: "Последние проекты", id: "lastProjects" },
      ];
      const [sideBarItems, setSideBarItems] = useState(0);
    
    return ( <>
            <ul className={style.sidebar_list}>
          {arr.map((item, index) => (
            <li
              key={index}
              onClick={() => setSideBarItems(index)}
              className={style.sidebar_items}
            >
              <a className={style.aHrefs} href={"#" + item.id}>
                {item.text}
              </a>
              <span
                className={
                  sideBarItems === index
                    ? `${style.sidebar_square}`
                    : `${style.sideBarTrue}`
                }
              >
                {" "}
                <a className={style.spanAHref} href={"#" + item.id}>
                  O
                </a>{" "}
              </span>
            </li>
          ))}
        </ul>
    </> );
}

export default SidebarListComponent;