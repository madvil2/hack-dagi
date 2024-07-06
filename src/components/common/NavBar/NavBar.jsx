import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import paths from "../../../pages/paths";
import cx from "classnames";
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { GiTrophyCup } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const telegramData = useSelector((state) => state.telegram.telegramData);
  const isIos = telegramData?.platform === "ios";
  const isWeb =
    telegramData?.platform === "macos" || telegramData?.platform === "web";

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={cx(styles.navbar, { [styles.ios]: isIos })}>
      <div
        onClick={() => handleNavigate(paths.index)}
        className={styles.menuItem}
      >
        <IoHomeOutline size={isWeb ? 30 : 50} />
      </div>
      <div
        onClick={() => handleNavigate(paths.quests)}
        className={styles.menuItem}
      >
        <FaTasks size={isWeb ? 30 : 50} />
      </div>
      <div
        onClick={() => handleNavigate(paths.store)}
        className={styles.menuItem}
      >
        <MdLocalGroceryStore size={isWeb ? 30 : 50} />
      </div>
      <div
        onClick={() => handleNavigate(paths.rating)}
        className={styles.menuItem}
      >
        <GiTrophyCup size={isWeb ? 30 : 50} />
      </div>
      <div
        onClick={() => handleNavigate(paths.referral)}
        className={styles.menuItem}
      >
        <IoPeopleOutline size={isWeb ? 30 : 50} />
      </div>
    </div>
  );
};

export default NavBar;
