import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import areaCode from "../data/areaCode1.json";
import styles from "../css/TripInfo.module.css";
import loadingGif from './loading.gif';

import TripInfoPopup from "./TripInfoPopup";

const TripInfo = () => {
    const location = useLocation();

    const [sigunguCode, setSigunguCode] = useState(location.state ? location.state.sigunguCode : "" );
    const [touristSpotArr, setTouristSpotArr] = useState(null);
    const [areaName, setAreaName] = useState("");
    const [isPopupOn, setPopupOn] = useState(false);
    
    useEffect(() => {
        console.log(areaCode);
        const areaName = "#" + (sigunguCode === "" ? "강원도" : areaCode["response"]["body"]["items"]["item"][Number(sigunguCode)-1]["name"]);
        setAreaName( areaName );

        const getTourApi = async () => {
            const urn = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=McSZCW7LYX8dGwLtln2CN8hlWwnQkFQbibX470nlV797KxeZzTTWZdZ5%2Bsrqy%2FIDP8MDn%2BJHLxLcbsNQSKr6SQ%3D%3D&pageNo=1&numOfRows=200&MobileApp=AppTest&MobileOS=ETC&arrange=A&_type=json&contentTypeId=12&areaCode=32&sigunguCode=${sigunguCode}`;

            const touristSpotRes = await fetch(urn);
            const touristSpot = await touristSpotRes.json();

            setTouristSpotArr(touristSpot.response.body.items.item);
            console.log("data is ready")
        }
        getTourApi(); // api 관광지 데이터 불러오기
    }, [sigunguCode]);

    const selectAreaButtonClick = () => {
        setPopupOn(!isPopupOn);
    }

    return (
        <div className={styles.tripInfoArea}>
            <h1 className={styles.tripInfoTitle}>{areaName}</h1>
            <button className={styles.selectArea} onClick={(e) => {selectAreaButtonClick()}}>지역 선택</button>
            <div className={styles.touristSpotBoxes}>
                {touristSpotArr ? (
                    touristSpotArr
                        .filter((touristInfo) => touristInfo["firstimage"])
                        .map((touristInfo, index) => (
                            <div key={index} className={styles.touristSpotBox}>
                                <div className={styles.touristSpotImg} style={{backgroundImage: `url(${touristInfo["firstimage"]})`}}></div>
                                <p className={styles.touristSpotTitle}>{touristInfo["title"]}</p>
                            </div>
                        ))
                ) : (
                    <img src={loadingGif} alt="Loading..." />
                )}
            </div>
            {isPopupOn ? <TripInfoPopup /> : null}
        </div>
    )
}

export default TripInfo;