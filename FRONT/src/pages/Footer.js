import React from "react";
import styles from "../css/Footer.module.css";
// import tripIcon from "./tripIcon.png"

const Footer = () => {
    return (
        // <div className={styles.footerArea}>
        //     <section className={styles.footerTopArea}>
        //         <img src={tripIcon} /> <h1>강원도-락도락</h1>
        //     </section>
        //     <section className={styles.footerMidArea}>
        //         <article className={styles.footerMidLeftArea}></article>
        //         <article className={styles.footerMidRightArea}></article>
        //     </section>
        //     <section className={styles.footerBottomArea}>
        //     </section>
        // </div>
        <footer className={styles.footerArea}>
            <section className={styles.footerSection}>
                <article>
                    {/* <article> */}
                        <p className={styles.copyrightTxt}>© 2024 team_Dyno &nbsp; Gangwon-do Travel Project</p>
                        <p className={styles.footerTxt}>Gangwon-do RakdoRak | Collaborators: Yujin Kim | Juhwan Bae | Donghyun Seo</p>
                        <p className={styles.footerTxt}>All rights reserved.</p>
                    {/* </article> */}
                </article>
                <div className={styles.footerLogo}></div>

                {/* <article>
                    <h4>Contact</h4>
                    <p>Email: dorock@gmail.com</p>
                    <p>Phone: +123 456 7890</p>
                </article> */}
                {/* <article>
                    <h4>Follow us</h4>
                    <div>
                    <i className="xi-facebook xi-4x"></i>
                    <i className="xi-instagram xi-4x"></i>
                    <i className="xi-kakaotalk xi-4x"></i>
                    <i className="xi-naver-square xi-4x"></i>
                    </div>
                </article> */}
            </section>
        </footer>
    )
}

export default Footer;