import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/Home.module.css';
import HomeMapClicker from "./Home_MapClicker";
import HomeSigunguClicker from "./Home_SigunguClicker";
import { useNavigate } from 'react-router-dom';
// 이미지
import slideImg_1 from '../images/home_slide_1.png';
// import slideImg_2 from '../images/home_slide_2.png';

function Home() {
    return (
        <>
            <div className={styles.wrap}>
                <TimeWeatherSection />
                <MainContent />
            </div>
            <HomeMapClicker />
            <HomeSigunguClicker />
        </>
    );
}

function TimeWeatherSection() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [weather, setWeather] = useState("⛈️, 22°C");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("it-IT"));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.timeWeatherBar}>
            <article className={styles.timeBox}>
                <p className={styles.timeTitle}>대한민국</p>
                <p className={styles.time}>{time}</p>
            </article>
            <article className={styles.weatherBox}>
                <p className={styles.weatherTitle}>강원도 날씨</p>
                <p className={styles.weather}>{weather}</p>
            </article>
        </section>
    );
}

function MainContent() {
    const navigate = useNavigate();
    // const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <section className={styles.mainContent}>
            <section className={styles.slideArea}>
                <article className={styles.slideimgWrap}>
                    <div className={styles.slideBox}>
                            <img src={slideImg_1} alt={`슬라이드 이미지1`} className={styles.slideImage} />
                    </div>
                </article>
                {/* <div className={styles.sliderContainer}>
                <input type="range"/>
                    <button className={styles.prevButton}><i className="xi-arrow-left"></i></button>
                    <button className={styles.stopButton}><i className="xi-pause"></i></button>
                    <button className={styles.nextButton}><i className="xi-arrow-right"></i></button>
                </div> */}
            </section>
            <article className={styles.promptBox}>
                <h2 className={styles.promptTitle}>나만의 강원도 여행 플랜, 한 번의 클릭으로 완성됩니다!</h2>
                <input className={styles.aiInput} type="text" placeholder="예: 속초로 2박 3일 여행코스 추천해줘" />
                <button className={styles.submitBtn} onClick={() => navigate("/aiPlanner")}>추천 받기</button>
            </article>
        </section>
    );
}

export default Home;
