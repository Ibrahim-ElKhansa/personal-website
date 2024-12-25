import React, { useState, useEffect } from "react";
import styles from "../styles/Common.module.css";
import skills from "../data/skills";
import aboutMe from "../data/aboutMe";
import projects from "../data/projects";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function range(start: number, end: number) {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingTitle}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainTitle}>Ibrahim El Khansa</p>
      <div className={styles.headContainer}>
        <img src={"Profile.jpg"} alt="Profile Pic" className={styles.profile} />
        <div className={styles.linkContainer}>
          <a href={"mailto:ibrahimelkhansa02@gmail.com"} target="_blank" rel="noopener noreferrer">
            <EmailIcon/>
          </a>
          <a href={"https://www.instagram.com/noprobbxb/"} target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
          <a href={"https://www.linkedin.com/in/ibrahimelkhansa0/"} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
          </a>
          <a href={"https://www.coursis.org"} target="_blank" rel="noopener noreferrer">
            <img className={styles.linkImage} src={"coursis.png"} alt={"coursis"} />
          </a>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.aboutTitle}>A Little Bit About Me</p>
        <p className={styles.aboutDescription}>{aboutMe}</p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.aboutTitle}> Projects & Experiences</p>
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project.priority}>
              <strong>
                {project.title}
                {project.role ? ` - ${project.role}` : ""} ({project.startTime} - {project.endTime}):
              </strong>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.aboutTitle}> Skills</p>
        <div className={styles.skills}>
          {skills.map((v, i) => (
            <div key={i} className={styles.skillBox}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.aboutTitle}> Hobbies</p>
        <p className={styles.hobbyText}>
          As a drummer, I've played in many events and with hundreds of musicians. Below are some images of me playing in my favourite events:</p>
        <div className={styles.hobbyImages}>
          {range(1, 10).map((num, i) => (
            <img key={i} className={styles.hobby} src={`/${num}.png`} alt={`drumming ${i + 1}`} />
          ))}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.downloadTitle}>
          {" "}
          Download my CV{" "}
          <a href={"/IbrahimElKhansaCV.pdf"} download="IbrahimElKhansaCV.pdf">
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
