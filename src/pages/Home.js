import React, { useState, useEffect } from 'react';
import styles from '../css/Home.module.css';
import images from '../images/1.jpg';

import HomeMapClicker from "./Home_MapClicker";
import HomeSigunguClicker from "./Home_SigunguClicker";
import { useNavigate } from 'react-router-dom';


function Home() {
    return (
        <>
            <Contents />
            <HomeMapClicker />
            <HomeSigunguClicker />
        </>
    )
}

function Contents() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrap}>
            <section className={styles.contents}>
                <div className={styles.textSection}>
                    <p className={styles.title}>강원도의 특별한 여행지를 클릭 한 번으로 만나보세요.</p>
                    <p className={styles.inputBox}>
                        <input className={styles.aiInput} type="text" placeholder="어디로 여행을 떠나시나요?" />
                        <button className={styles.submitBtn} onClick={() => navigate("/aiPlanner")}><i classNAme="xi-send"></i></button>
                    </p>
                </div>
                <div className={styles.imageSection}></div>
            </section>
            {/* 이미지요소 */}
            <section className={styles.slideArea}>
                <div className={styles.sliderBox}>
                    <img className={styles.slideImg} src={images} alt="슬라이드이미지1" />
                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.slideImg} src={images} alt="슬라이드이미지2" />
                </div>
                <div className={styles.sliderBox}>
                    <img className={styles.slideImg} src={images} alt="슬라이드이미지3" />
                </div>
            </section>
            {/* slider */}
            <div className={styles.sliderNav}>
                <input className={styles.line} type="range"></input>
                <span className={styles.pagination}>
                    <span>4</span> / <span>4</span> 
                </span>
                <button className={styles.prevButton}>&larr;</button>
                <button className={styles.pauseButton}>||</button>
                <button className={styles.nextButton}>&rarr;</button>
            </div>
        </div>
    );
}
export default Home;
