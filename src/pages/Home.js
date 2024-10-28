import React, { useState, useEffect } from 'react';
import styles from '../css/Home.module.css';
import images from '../images/1.jpg';


function Home(){
    return (
        <div className={styles.wrap}>
            <Contents/>
        </div>
    )
}

function Contents() {
    return (
        <>
        <section className={styles.contents}>
            <div className={styles.textSection}>
                <p className={styles.title}>강원도의 특별한 여행지를 클릭 한 번으로 만나보세요</p>
                <p><input className={styles.aiInput} type="text" placeholder="어디로 여행을 떠나시나요?"/></p>
            </div>
            <div className={styles.imageSection}></div>
            <div className={styles.pagination}>
                <span>01 / 05</span>
                <div className={styles.controls}>
                    <button>{'<'}</button>
                    <button>||</button>
                    <button>{'>'}</button>
                </div>
            </div>
        </section>
        {/* 이미지요소 */}
        <section className={styles.slideArea}>
            <div className={styles.sliderBox}>
                <img className={styles.slideImg} src={images} alt="슬라이드이미지1"/>
            </div>
            <div className={styles.sliderBox}>
                <img className={styles.slideImg} src={images} alt="슬라이드이미지2"/>
            </div>
            <div className={styles.sliderBox}>
                <img className={styles.slideImg} src={images} alt="슬라이드이미지3"/>
            </div>
        </section>
        </>
    );
}
export default Home;
