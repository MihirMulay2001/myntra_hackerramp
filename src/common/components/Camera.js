import React, { useState, useRef } from "react";
import styles from "../../../styles/Landing.module.css";
import Link from "next/link";

import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [cam, setcam] = useState(true);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImgSrc(imageSrc);
    setcam(!cam);
  }, [webcamRef, setImgSrc]);

  const retake = () => {
    setcam(true);
  };

  const videoConstraints = {
    width: 317,
    height: 336,
    facingMode: "user",
    // facingMode: { exact: "environment" },
  };
  return (
    <div className={styles.came}>
      {cam && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />

          <button
            className={`${styles.landing_btn} ${styles.capture}`}
            onClick={capture}
          >
            Capture photo
          </button>
        </>
      )}

      {imgSrc && !cam && (
        <div>
          <img src={imgSrc} />
          <div className={styles.confirm}>
            <Link href="/Results" passHref>
              <button className={`${styles.landing_btn} ${styles.capture}`}>
                Proceed
              </button>
            </Link>
            <button
              className={`${styles.landing_btn} ${styles.capture}`}
              onClick={retake}
            >
              Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Camera;
