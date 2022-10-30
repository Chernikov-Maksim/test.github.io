import { useState } from "react";
import style from "./Input.module.scss";

export const Form = ({ setDataFetch }) => {
  const [change, setChange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetching();
    setChange("");
  };
  const fetching = async () => {
    try {
      const url = `https://swapi.dev/api/people/${change}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error");

      const json = await response.json();
      setDataFetch(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <form className={style.name} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setChange(e.target.value)}
        value={change}
        type="number"
      />
      <input className={style.btn} type="submit" />
    </form>
   
    
  );
};
