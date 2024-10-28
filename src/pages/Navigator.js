import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navigator.module.css";

function Navigator() {
    return (
        <>
        <div className={styles.navigator}>
            <section className={styles.logoArea}>강원도락도락</section>
            <nav className={styles.navBar}>
                <ul className={styles.menuElement}>
                    <li>
                        <Link to="/">홈</Link> 
                    </li>
                    <li>
                        <Link to="/tripInfo">여행 정보</Link>
                    </li>
                    <li>
                    <Link to="/aiPlanner">AI</Link>
                    </li>
                </ul>
                
            </nav>
            <section className={styles.buttonArea}>여백...</section>
            
        </div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | <Link to="/TripInfoPage">TripInfoPage</Link>
        </>
    )
}

export default Navigator;