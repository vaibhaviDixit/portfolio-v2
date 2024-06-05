import React,{useEffect} from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {

  useEffect(()=>{
      Aos.init();
  },[]);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text} data-aos="fade-left" data-aos-duration="1500">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:vaibhavidixit511@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/in/vaibhavi-dixit/">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/vaibhaviDixit"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
      </ul>
    </footer>
  );
};
