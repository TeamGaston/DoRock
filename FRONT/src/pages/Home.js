import React, { useState, useEffect } from 'react';
import styles from '../css/Home.module.css';
import HomeMapClicker from "./Home_MapClicker";
import HomeSigunguClicker from "./Home_SigunguClicker";
import { useNavigate } from 'react-router-dom';
// 이미지
import slideImg_1 from '../images/home_slide_1.png';
import slideImg_2 from '../images/home_slide_2.png';
import slideImg_3 from '../images/home_slide_3.jpg';
import slideImg_4 from '../images/home_slide_4.jpg';

function Home() {
    return (
        <>
            <div className={styles.wrap}>
                <section className={styles.timeWeatherBar}>
                    <TimeSection />
                    <WeatherSection />
                </section>
                <MainContent />
            </div>
            <HomeMapClicker />
            <HomeSigunguClicker />
        </>
    );
}

// == TimeSection ==
function TimeSection() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("it-IT"));
    useEffect(() => {

        // 시간 업데이트
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("it-IT"));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <article className={styles.timeBox}>
                <p className={styles.timeTitle}>대한민국</p>
                <p className={styles.time}>{time}</p>
            </article>
        </>
    );
}

// == WeatherSection ==
function WeatherSection() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const API_KEY = 'fc164a6bd1130133b46438cd2da3f169';
        const lat = 37.555;
        const lon = 128.209;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const fetchWeather = () => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("네트워크 응답에 문제가 있습니다.");
                    }
                    return response.json();
                })
                .then(data => {
                    setWeather(data);
                })
                .catch(error => {
                    setError(error.message);
                    console.log(error)
                });
        };

        fetchWeather();
        const weatherInterval = setInterval(fetchWeather, 3600000); // 1시간
        return () => {
            clearInterval(weatherInterval);
        };
    }, []);

    // 로딩 상태 또는 에러 처리
    if (error) return <p>Error: {error}</p>;
    if (!weather) return <p>Loading...</p>;

    return (
        <>
            <article className={styles.weatherBox}>
                <p className={styles.weatherTitle}>강원도 날씨</p>
                <div>
                    <img
                        className={styles.weatherIcon}
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="날씨 아이콘"
                    />
                    <p className={styles.temperature}>{weather.main.temp}°C</p>
                    {/* <p className={styles.weatherDescription}>날씨: {weather.weather[0].description}</p> */}
                </div>
            </article>
        </>
    );
}

// == MainContent ==
function MainContent() {
    const navigate = useNavigate();
    const slideImages = [slideImg_1, slideImg_2, slideImg_3, slideImg_4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); // 페이드 아웃 시작
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
                );
                setIsFading(false); // 페이드 인 시작
            }, 900); // 페이드 아웃 시간
        }, 7000); // 이미지 전환 주기 (페이드 인/아웃 포함)

        return () => clearInterval(interval);
    }, [slideImages.length]);

    return (
        <section className={styles.mainContent}>
            <section className={styles.slideArea}>
                <article className={styles.slideimgWrap}>
                    {slideImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`슬라이드 이미지 ${index + 1}`}
                            className={`${styles.slideImage} ${index === currentImageIndex ? (isFading ? styles.fadeOut : styles.fadeIn) : styles.hidden}`}
                        />
                    ))}
                </article>
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
