import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <nav className={styles["nav"]}>
      <ul>
        <li>
          <Link href={`/home`}>Home</Link>
        </li>
        <li>
          <Link href={`/projects`}>Projects</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
