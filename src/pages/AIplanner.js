import React from "react";
import styles from "../css/List.module.css";
import loadingGif from "./loading.gif";
import tripIcon from "./tripIcon.png";

import { GoogleMap, LoadScript, MarkerF, useLoadScript } from '@react-google-maps/api';
import gptTempData from '../data/gptTempData.json';

//구글 맵 초기화면(강원도) 설정을 위한
const center = {
    lat: 37.8228,  
    lng: 128.1555
}

const markers = [
    { id: 1, lat: 37.8228, lng: 128.1555 }, // 강원도 중심 좌표 예시
    { id: 2, lat: 37.8813, lng: 127.7298 }, // 홍천 좌표 예시
    { id: 3, lat: 38.1194, lng: 128.4656 }, // 속초 좌표 예시
    // 원하는 만큼 마커 추가 가능
];

// 깊은 복사 
const articleList = JSON.parse(JSON.stringify(gptTempData.response.body.items.item));
console.log(  articleList);
//이미지 있는것들만 추출
const articlesJSX = articleList.filter((v, i, a) => {
    if (v.firstimage != "") {
        return true
    } else {
        return false
    }
}).map((v) => {
    return (<article key={v.contentid} className={styles.locationCard}>
        <img src={v.firstimage} alt={v.title} className={styles.locationImage} />
        <div className={styles.locationInfo}>
            <h3 className={styles.locationTitle}>{v.title}</h3>
            <p className={styles.locationAddress}>📍 {v.addr1}</p>
        </div>
    </article>)
})



const AIplanner = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCvUTdnbYLYpSKLoKfKqWRt6dGfaubhmus"
    });

    if (loadError) return <p>맵을 불러오는 중 오류가 발생했습니다.</p>
    if (!isLoaded) return <img src={loadingGif} alt="Loading..." />

    return (
        <div className={styles.mainContainer}>
            <main className={styles.main}>
                <section className={styles.leftPanel}>
                    <article className={styles.gptChat}>
                        <h2>GPT 대화창 표시</h2>
                        <section className={styles.gptBody}>
                            <article className={styles.gptChatRight}>
                                <p>❤️ : 대한민국 강원도 관광지 10개 추천해줘</p>
                            </article>
                            <article className={styles.gptChatLeft}>
                                <p>GPT : 네 10가지 관광지들을 추천해드릴게요</p>
                            </article>

                        </section>
                        <input className={styles.gptInput} type="text" placeholder="대한민국 강원도 관광지 10개 추천해줘" />
                    </article>
                    <article className={styles.itinerary}>
                        <section className={styles.locationList}>
                            {articlesJSX}
                        </section>
                    </article>
                </section>
                <section className={styles.rightPanel}>
                    <article className={styles.map}>
                        <GoogleMap mapContainerClassName={styles.mapComponent} center={center} zoom={9}>
                            {articleList.map((marker) => (
                                <MarkerF
                                    key={marker.contentid}  // 고유 키 값
                                    position={{ lat: Number(marker.mapy), lng: Number(marker.mapx) }}
                                    icon={{
                                        url:tripIcon,
                                        scaledSize: new window.google.maps.Size(40,40)
                                    }}
                                />
                            ))}
                        </GoogleMap>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AIplanner;