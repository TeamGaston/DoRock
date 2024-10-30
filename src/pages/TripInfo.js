import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AreaCode from "../data/areaCode1.json";
import TouristSpot from "../data/touristSpot.json";
import styles from "../css/TripInfo.module.css";
import loadingGif from './loading.gif';

import TripInfoPopup from "./TripInfoPopup";

const TripInfo = () => {
    const location = useLocation();

    const [sigunguCode, setSigunguCode] = useState(location.state?.sigunguCode ? [location.state.sigunguCode] : ["all"]); // sigunguCode 업데이트
    const [touristSpotObj, setTouristSpotObj] = useState(null); // 정리된 TouristSpot
    const [touristSpotArr, setTouristSpotArr] = useState(null); // 정리된 TouristSpot에 ["sigunguCode"]
    const [areaName, setAreaName] = useState(""); // Page Title 변경을 위한
    const [isPopupOn, setPopupOn] = useState(false); // 팝업 토글

    useEffect(() => { // 초기 실행 코드 // 객체 정리 (속도 향상을 위해)
        const touristSpotArr = (TouristSpot.response.body.items.item).filter((touristSpot) => touristSpot["firstimage"]);
        const organizedTouristSpot = { "all": [] };
        touristSpotArr.forEach(touristSpot => {
            organizedTouristSpot["all"].push(touristSpot);
            if (touristSpot["sigungucode"] in organizedTouristSpot) {
                organizedTouristSpot[touristSpot["sigungucode"]].push(touristSpot);
            } else {
                organizedTouristSpot[touristSpot["sigungucode"]] = [touristSpot];
            }
        });
        setTouristSpotObj(organizedTouristSpot);
    }, []);

    useEffect(() => { // location 변경 감지
        setSigunguCode(location.state?.sigunguCode ? [location.state.sigunguCode] : ["all"]);
    }, [location.state]);

    useEffect(() => { // sigunguCode가 바뀔 때 마다 실행될 코드 // 정리해둔 객체를 통해 데이터 시각화
        let areaName = "";
        console.log(sigunguCode)
        sigunguCode.forEach((sigunguNum) => {
            console.log(sigunguNum)
            if (sigunguNum === "all") {
                areaName += "# 강원도 ";
            } else {
                areaName += `# ${AreaCode["response"]["body"]["items"]["item"][Number(sigunguNum) - 1]["name"]} `;
            }
        });

        setAreaName(areaName);
        if (touristSpotObj !== null) {
            const touristSpots = [];
            sigunguCode.forEach((sigungu) => {
                //touristSpotObj[sigungu];
                touristSpots.push(...touristSpotObj[sigungu])
            })
            setTouristSpotArr(touristSpots);
            console.log(touristSpots)
        }

    }, [touristSpotObj, sigunguCode]);

    const selectAreaButtonClick = () => {
        setPopupOn(!isPopupOn);
        setSigunguCode(["11", "1"]);
    }

    return (
        <section className={styles.tripInfoWrapper}>
            <section className={styles.tripInfoArea}>
                <article className={styles.titleArea}>
                    <h1 className={styles.tripInfoTitle}>{areaName}</h1>
                    <button className={styles.selectButton} onClick={(e) => { selectAreaButtonClick() }}>지역선택</button>
                </article>
                <article className={styles.touristSpotBoxes}>
                    {touristSpotArr ? (
                        touristSpotArr
                            .map((touristInfo, index) => (
                                <div key={index} className={styles.touristSpotBox}>
                                    <div className={styles.touristSpotImg} style={{ backgroundImage: `url(${touristInfo["firstimage"]})` }}></div>
                                    <div className={styles.infoArea}>
                                        <p className={styles.touristSpotTitle}>{touristInfo["title"]}</p>
                                        <p className={styles.touristSpotAddr}>{`${touristInfo["addr1"]} ${touristInfo["addr2"]}`}</p>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <img src={loadingGif} alt="Loading..." />
                    )}
                </article>
                {isPopupOn ? <TripInfoPopup /> : null}
            </section>
        </section>

    )
}

export default TripInfo;