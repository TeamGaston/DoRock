import React, { useState, useEffect } from 'react';
import styles from '../css/Home.module.css';


function Home(){
    return (
        <div className={styles.wrap}>
            <Contents/>
        </div>
    )
}

function Contents() {
    return (
        <section className={styles.contents}>
            <div className={styles.textSection}>
                <p className={styles.title}>강원도의 특별한 여행지를 클릭 한 번으로 만나보세요</p>
                <p><input className={styles.aiInput} type="text" placeholder="어디로 여행을 떠나시나요?"/></p>
            </div>
            <div className={styles.imageSection}>
                {/* <img src={image} alt="반려동물 여행" /> */}
            </div>
            <div className={styles.pagination}>
                <span>01 / 05</span>
                <div className={styles.controls}>
                    <button>{'<'}</button>
                    <button>||</button>
                    <button>{'>'}</button>
                </div>
            </div>
        </section>
    );
}
export default Home;
