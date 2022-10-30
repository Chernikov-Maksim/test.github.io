import style from "./PeopleData.module.scss";

export const PeopleData = ({dataFetch}) => {
  return (
    <div className={style.PeopleData}>
      <p className={style.name}>{`Name: ${dataFetch.name}`}</p>
      <p className={style.age}>{`Age: ${dataFetch.age}`}</p>
      <p className={style.gender}>{`Gender:${dataFetch.gender}`} </p>
      <p className={style.homeworld}>{`Homeworld: ${dataFetch.homeworld}`}</p>
      <p
        className={style.birth_year}
      >{`Birth_year:${dataFetch.birth_year} `}</p>
      <p className={style.eye_color}>{`Eye_color: ${dataFetch.eye_color}`}</p>
      <p className={style.films}>{`Films:${dataFetch.films} `}</p>
      <p
        className={style.skin_color}
      >{`Skin_color: ${dataFetch.skin_color}`}</p>
    </div>
  );
};
