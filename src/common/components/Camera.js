import * as React from "react";
import { useState, useRef } from "react"
import {useSelector, useDispatch} from 'react-redux'
import styles from "../../../styles/Landing.module.css";
import Link from "next/link";
import { addImage } from "../../redux/actions";


import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [cam, setcam] = useState(true);
  const dispatch = useDispatch()

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    //console.log(imageSrc.substring(23));
    dispatch(addImage(imageSrc.substring(23)));
    setImgSrc(imageSrc);
    setcam(!cam);
  }, [webcamRef, setImgSrc, cam]);

  const retake = () => {
    setcam(true);
  };

  const videoConstraints = {
    width: 317,
    height: 336,
    facingMode: "user",
    //facingMode: { exact: "environment" },
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
