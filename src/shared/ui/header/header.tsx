import React, { FC } from "react";
import styles from "./header.module.scss";

interface IHeader {
  children: React.ReactNode;
}

const Header: FC<IHeader> = ({ children }) => {
  return <header className={styles.container}>{children}</header>;
};

export default Header;
