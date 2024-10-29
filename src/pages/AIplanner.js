import React from "react";
import styles from "../css/List.module.css";
import loadingGif from "./loading.gif";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import gptTempData from '../data/gptTempData.json';

//구글 맵 초기화면 설정을 위한
const center = {
    lat: 37.5665,
    lng: 126.9780
}

// 깊은 복사 
const articleList = JSON.parse(JSON.stringify(gptTempData.response.body.items.item));

//이미지 있는것들만 추출
const articlesJSX = articleList.filter( (v,i,a)=>{
    if(v.firstimage != ""){
        return true
    }else{
        return false
    }
} ).map( (v)=>{
    return (<article key={v.contentid} className={styles.locationCard}>
        <img src={v.firstimage} alt={v.title} className={styles.locationImage} />
        <div className={styles.locationInfo}>
            <h3 className={styles.locationTitle}>{v.title}</h3>
            <p className={styles.locationAddress}>📍 {v.addr1}</p>
        </div>
    </article>)
} )






// for (let i = 0; i < 20; i++) {
//     tempData.push(
//         <article className={styles.locationCard}>
//             <img src={loadingGif} alt="noImage" className={styles.locationImage} />

//             <div className={styles.locationInfo}>
//                 <h3 className={styles.locationTitle}>타이틀</h3>
//                 <p className={styles.locationAddress}>📍주소</p>
//             </div>
//         </article>)
// }

const UserList = () => {

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
                        <LoadScript googleMapsApiKey="AIzaSyCvUTdnbYLYpSKLoKfKqWRt6dGfaubhmus">
                            <GoogleMap mapContainerClassName={styles.mapComponent} center={center} zoom={10}>
                                <Marker position={center}></Marker>
                            </GoogleMap>
                        </LoadScript>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default UserList;