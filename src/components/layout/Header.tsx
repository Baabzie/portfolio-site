import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <h1>Tobias Olausson</h1>
      <p>Front-end Developer</p>
    </header>
  );
};

export default Header;
