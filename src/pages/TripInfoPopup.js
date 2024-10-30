import React, { useState, useRef } from "react";
import popupStyles from "../css/TripInfoPopup.module.css"
import areaCode1 from "../data/areaCode1.json"
const TripInfoPopup = () => {
    const areaCode = areaCode1.response.body.items.item;
    const checkBoxSectionRef = useRef(null);
    const [showWarning, setShowWarning] = useState(false); // 경고 메시지 상태


    // 개별 체크박스 클릭 시 "강원도 전체" 체크 박스 업데이트
    const handleIndividualCheckboxClick = (e) => {
        const checkboxes = checkBoxSectionRef.current.querySelectorAll("input[type='checkbox']:checked");
        console.log(checkboxes.length)
        if (checkboxes.length >= 6) {
            e.target.checked = false;

            setShowWarning(true); // 경고 메시지 표시
            setTimeout(() => {
                setShowWarning(false); // 경고 메시지 숨기기
            }, 1000);
        }
    }

    //검색버튼 이벤트 (선택된 항목들 전송)
    const handleButtonClick = () => {
        const checkedItems = [];
        const checkboxes = checkBoxSectionRef.current.querySelectorAll("input[type='checkbox']:checked");

        checkboxes.forEach(checkBox => {
            checkedItems.push(
                {
                    key: checkBox.id,
                    name: checkBox.nextElementSibling.textContent,
                }
            );
        });
        console.log("선택된 항목들", checkedItems);
    }
    //END 검색버튼 이벤트

    const resetButtonClick = () =>{
        const checkboxes = checkBoxSectionRef.current.querySelectorAll("input[type='checkbox']:checked");
        checkboxes.forEach( (v)=>{
            v.checked = false;
        } )
    }
    

    let inputs = "";
    inputs = areaCode.map((value) => {
        return <><input key={value.code} id={value.code} type="checkbox" onClick={handleIndividualCheckboxClick} /><label htmlFor={value.code}>{value.name}</label></>
    })

    return (
        <div className={popupStyles.popupContainer}>
            <main className={popupStyles.popupMain}>
                <section className={popupStyles.buttonSection}>
                    <button key ="resetBtn" onClick={resetButtonClick}>지역초기화</button>
                    <button key="searchBtn" onClick={handleButtonClick}>검색</button>
                </section>
                <section className={popupStyles.checkBoxSection} ref={checkBoxSectionRef}>
                    {inputs}
                </section>
                {/* 경고 메시지 */}
                <div className={`${popupStyles['warning-message']} ${showWarning ? popupStyles.visible : ""}`}>
                    최대 5개까지만 선택할 수 있습니다.
                </div>
            </main>
        </div>

    );
}

export default TripInfoPopup;