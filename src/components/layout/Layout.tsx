import React, { ReactNode } from "react";

import Header from "./Header";
import Navigation from "./Navigation";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["nav-main-div"]}>
        <Navigation />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
