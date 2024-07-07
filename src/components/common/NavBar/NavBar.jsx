import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import paths from "../../../pages/paths";
import cx from "classnames";
import { useSelector } from "react-redux";
import { FaRocketchat } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { VscReport } from "react-icons/vsc";
import { SlBookOpen } from "react-icons/sl";

const NavBar = () => {
    const navigate = useNavigate();
    const telegramData = useSelector((state) => state.telegram.telegramData);
    const isIos = telegramData?.platform === "ios";
    const isWeb = telegramData?.platform === "macos" || telegramData?.platform === "web";

    const [selected, setSelected] = useState(paths.index);

    const handleNavigate = (path) => {
        setSelected(path);
        navigate(path);
    };

    return (
        <div className={cx(styles.navbar, { [styles.ios]: isIos })}>
            <div
                onClick={() => handleNavigate(paths.index)}
                className={cx(styles.menuItem, { [styles.selected]: selected === paths.index })}
            >
                <GrProjects size={isWeb ? 30 : 50} />
            </div>
            <div
                onClick={() => handleNavigate(paths.chat)}
                className={cx(styles.menuItem, { [styles.selected]: selected === paths.chat })}
            >
                <FaRocketchat size={isWeb ? 30 : 50} />
            </div>
            <div
                onClick={() => handleNavigate(paths.study)}
                className={cx(styles.menuItem, { [styles.selected]: selected === paths.study })}
            >
                <SlBookOpen size={isWeb ? 30 : 50} />
            </div>
            <div
                onClick={() => handleNavigate(paths.contribute)}
                className={cx(styles.menuItem, { [styles.selected]: selected === paths.contribute })}
            >
                <VscReport size={isWeb ? 30 : 50} />
            </div>
        </div>
    );
};

export default NavBar;
