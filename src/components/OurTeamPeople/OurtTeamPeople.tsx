import { ourTeamsPeopleData } from "./OurtTeamPeopleData";
import style from "./OurTeamPeaopleComponent.module.scss";
function OurTemsPeopleComponent() {
  return (
    <div className={style.cards}>
      {ourTeamsPeopleData.map((team) => (
        <div className={style.card}>
          <img className={style.photo} src={team.photo} alt="Асхьаб" />
          <p className={style.name}>
            {team.lastName} <br /> {team.firstName}
          </p>
          <p className={style.post}>{team.developerDescription}</p>
          <p className={style.quote}>
            Цитата: <br />
            {team.quoteText}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OurTemsPeopleComponent;
