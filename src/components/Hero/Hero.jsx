import React,{useEffect} from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import Aos from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

  useEffect(()=>{
      Aos.init();
  },[]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="zoom-in" data-aos-duration="1000">Hi, I'm Vaibhavi</h1>
        <p className={styles.description} data-aos="fade-up" data-aos-duration="2000">
          Passionate Full Stack Web Developer specializing in creating dynamic, responsive, and user-friendly applications.<br/> Let's bring your vision to life!<br/>
          Transforming ideas into engaging digital experiences.
        </p>
        <a href="https://drive.google.com/file/d/12FADLYk2KA9MovTXLNKZUd8PScGSg32q/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Resume
        </a>
      </div>

        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
