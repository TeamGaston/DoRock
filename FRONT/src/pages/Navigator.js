import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Navigator.module.css";

function Navigator() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return (
        <>
        <div className={styles.navigator}>
            <section className={styles.logoArea} onClick={e => goToHome()}></section>
            <nav className={styles.navBar}>
                <ul className={styles.menuElement}>
                    <li><Link to="/" className={styles.linkStyle}>홈</Link> </li>
                    <li><Link to="/tripInfo" className={styles.linkStyle}>여행정보</Link></li>
                    <li><Link to="/aiPrompt" className={styles.linkStyle}>AI여행</Link></li>
                </ul>
            </nav>
            <section className={styles.buttonArea}></section>
        </div>
        </>
    )

    /*<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | <Link to="/TripInfoPage">TripInfoPage</Link> */
}

export default Navigator;