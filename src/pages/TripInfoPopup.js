import React, { useState } from "react";
import popupStyles from "../css/TripInfoPopup.module.css";
import areaCode1 from "../data/areaCode1.json";

const TripInfoPopup = (props) => {
    const { closePopup, research } = props;
    const areaCode = areaCode1.response.body.items.item;

    const [checkedItems, setCheckedItems] = useState([]); // 선택된 체크박스 ID 관리
    const [showWarning, setShowWarning] = useState(false); // 경고 메시지 상태

    const handleCheckboxChange = (e, code) => {
        if (e.target.checked) {
            if (checkedItems.length >= 5) {
                e.target.checked = false;
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 1000);
            } else {
                setCheckedItems([...checkedItems, code]); // 선택 항목 추가
            }
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== code)); // 선택 항목 제거
        }
    };

    const handleButtonClick = () => {
        research(checkedItems); // 선택된 항목 전송
        closePopup(false);
        console.log("선택된 항목들", checkedItems);
    };

    const resetButtonClick = () => {
        setCheckedItems([]); // 선택 항목 초기화
    };

    return (
        <div className={popupStyles.popupContainer}>
            <main className={popupStyles.popupMain}>
                <section className={popupStyles.buttonSection}>
                    <button onClick={resetButtonClick}>지역초기화</button>
                    <button onClick={handleButtonClick}>검색</button>
                </section>
                <section className={popupStyles.checkBoxSection}>
                    {areaCode.map((value) => (
                        <>
                            <input
                                id={value.code}
                                type="checkbox"
                                checked={checkedItems.includes(value.code)}
                                onChange={(e) => handleCheckboxChange(e, value.code)}
                            />
                            <label htmlFor={value.code}>{value.name}</label>
                        </>
                    ))}
                </section>
                <div className={`${popupStyles['warning-message']} ${showWarning ? popupStyles.visible : ""}`}>
                    최대 5개까지만 선택할 수 있습니다.
                </div>
            </main>
            <div className={popupStyles.popupBackground} onClick={() => closePopup(false)}></div>
        </div>
    );
};

export default TripInfoPopup;
