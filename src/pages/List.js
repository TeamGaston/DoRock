import React from "react";
import styles from "../css/List.module.css"
import loadingGif from "./loading.gif"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const center = {
    lat: 37.5665,
    lng: 126.9780
}

let tempData = [];



for (let i = 0; i < 20; i++) {
    tempData.push(
        <article className={styles.locationCard}>
            <img src={loadingGif} alt="noImage" className={styles.locationImage} />

            <div className={styles.locationInfo}>
                <h3 className={styles.locationTitle}>타이틀</h3>
                <p className={styles.locationAddress}>📍주소</p>
            </div>
        </article>)
}

const UserList = () => {

    return (
        <div className={styles.mainContainer}>
            <main className={styles.main}>
                <section className={styles.leftPanel}>
                    <article className={styles.gptChat}>
                        <h2>GPT 대화창 표시</h2>
                        <setion className={styles.gptBody}>
                            <article className={styles.gptChatRight}>
                                <p>❤️ : 대한민국 강원도 관광지 10개 추천해줘</p>
                            </article>
                            <article className={styles.gptChatLeft}>
                                <p>GPT : 네 10가지 관광지들을 추천해드릴게요</p>
                            </article>

                        </setion>
                        <input className={styles.gptInput} type="text" placeholder="대한민국 강원도 관광지 10개 추천해줘" />
                    </article>
                    <article className={styles.itinerary}>
                        <section className={styles.locationList}>
                            {tempData}
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