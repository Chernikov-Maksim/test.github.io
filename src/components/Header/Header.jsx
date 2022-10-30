import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <p className={style.text}>Тестовое задание вывода данных с API</p>
    </header>
  );
};
