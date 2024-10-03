import Link from "next/link";

import { useState, useEffect } from "react";

import styles from "./Navigation.module.scss";

//Change to loop to form tabs, for cleaner code

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");

  const changeTab = (clickedTab: string) => {
    setActiveTab(clickedTab);
  };

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <nav className={styles["nav"]}>
      <ul>
        <li>
          <Link
            onClick={() => {
              changeTab("home");
            }}
            href={`/home`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              changeTab("projects");
            }}
            href={`/projects`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              changeTab("About");
            }}
            href={`/about`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              changeTab("contact");
            }}
            href={`/contact`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
