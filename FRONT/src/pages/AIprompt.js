// import React, { useState, useEffect } from 'react';
import styles from '../css/Alprompt.module.css';



function Alprompt() {
    return (
        <div className={styles.alpromptContainer}>
            <section className={styles.content}>
                <h1 className={styles.AITitle}>강원도 여행을 떠나요!</h1>
                <p className={styles.AIsubText}>자연 속 강원도로 떠나 특별한 순간을 누려보세요.</p>
                <article className={styles.tags}>
                    <input type="checkbox" id="leisure" className={styles.checkbox} />
                    <label htmlFor="leisure" className={styles.tagBtn}>레저</label>

                    <input type="checkbox" id="history" className={styles.checkbox} />
                    <label htmlFor="history" className={styles.tagBtn}>역사</label>

                    <input type="checkbox" id="nature" className={styles.checkbox} />
                    <label htmlFor="nature" className={styles.tagBtn}>자연</label>

                    <input type="checkbox" id="shopping" className={styles.checkbox} />
                    <label htmlFor="shopping" className={styles.tagBtn}>쇼핑</label>
                </article>
                <article className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="어디로 여행을 떠나시나요?"
                        className={styles.searchInput}
                    />
                    <button className={styles.searchBtn}>
                        <span>&#x27A4;</span>
                    </button>
                </article>
            </section>
        </div>
    );
}

export default Alprompt;