import React from "react";
import styles from "../../../styles/Landing.module.css";
// import Image from "next/image";

const LandingInfo = () => {
  return (
    <div className={styles.landing__content}>
      <p className={styles.landing__content_title}>
        Find the perfect match for your clothing in 3 easy steps
      </p>
      <p className={styles.landing__content_para}>
        <img src="../assests/1.png" className={styles.landing__content_img} />
        Click a picture of your clothing item
      </p>
      <p className={styles.landing__content_para}>
        <img src="../assests/2.png" className={styles.landing__content_img} />
        Choose from a wide variety of AI recommended items to match your outfit
      </p>
      <p className={styles.landing__content_para}>
        <img src="../assests/3.png" className={styles.landing__content_img} />
        Adjust filters to match your taste
      </p>
    </div>
  );
};

export default LandingInfo;
