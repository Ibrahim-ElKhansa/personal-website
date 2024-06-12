import React from "react";
import styles from "../styles/Common.module.css";

const Home: React.FC = () => (
  <div className={styles.mainContainer}>
    <p className={styles.mainTitle}>Ibrahim El Khansa</p>
    <div className={styles.headContainer}>
      <img src="Profile.jpg" alt="Profile Pic" className={styles.profile} />
      <div className={styles.linkContainer}>
        <a
          href={"mailto:ibrahimelkhansa02@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.linkImage} src={"/mail.png"} alt={"mail"} />
        </a>
        <a
          href={"https://www.instagram.com/noprobbxb/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.linkImage}
            src={"/instagram.png"}
            alt={"instagram"}
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/ibrahimelkhansa0/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.linkImage}
            src={"linkedin.png"}
            alt={"linkedin"}
          />
        </a>
        <a
          href={"https://www.coursist.org"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.linkImage}
            src={"coursist.png"}
            alt={"coursist"}
          />
        </a>
      </div>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.aboutTitle}>A Little Bit About Me</p>
      <p className={styles.aboutDescription}>
        Hello! I'm Ibrahim, a Computer Science Engineering student from Beirut,
        fueled by a relentless drive for innovation and creation. I thrive on
        constantly diving into new projects, exploring fresh ideas and
        technologies to bring my entrepreneurial visions to life. I have an
        appetite for learning, constantly acquiring new skills through YouTube
        and Udemy and when I'm not coding, you'll find me immersed in music,
        routinely practicing and performing with my band. Drumming is my
        artistic outlet, and I love being part of the vibrant music scene.
        Balancing my time between tech projects, family business, and drumming,
        I'm all about creating, innovating, and making an impact.
      </p>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.aboutTitle}> Projects & Experiences</p>
      <ul className={styles.projects}>
        <li>
          <strong>
            Murex - Java Software Development Intern (06/2024 - 08/2024):
          </strong>
          <p>
            Currently completing an internship at Murex as a java software
            developer within the BPM Deimos team.
          </p>
        </li>
        <li>
          <strong>
            Fits Consulting - Digital Transformation Consultant Intern (08/2022
            - 11/2022):
          </strong>
          <p>
            Streamlined business processes using Bizagi, collaborated across
            teams, and developed client solutions with JAVA.
          </p>
        </li>
        <li>
          <strong>
            Khansa Carpets - Social Media Manager (10/2022 - 03/2023):
          </strong>
          <p>
            Managed social media campaigns, crafted product images, and analyzed
            performance metrics to enhance online presence and engagement.
          </p>
        </li>
        <li>
          <strong>
            American University of Beirut - Coding Tutor (09/2021 - 05/2024):
          </strong>
          <p>
            Delivered engaging tutorials in programming languages, including
            Python and C++, and facilitated accessible learning resources for
            students.
          </p>
        </li>
        <li>
          <strong>
            Coursist <a href={"https://www.coursist.org"}>(coursist.org)</a> -
            Co-developer and maintainer (11/2021 - Present):
          </strong>
          <p>
            Co-created a course scheduling website to aid university students,
            ensuring a user-friendly experience and ongoing feature
            enhancements.
          </p>
        </li>
        <li>
          <strong>3azaw2ak Mobile App - Developer (01/2023 - 06/2023):</strong>
          <p>
            Developed a cross-platform native app for efficient data processing
            and real-time updates for a food delivery app that was discontinued.
          </p>
        </li>
        <li>
          <strong>
            Messaging Platform - Collaborator (10/2022 - 12/2022):
          </strong>
          <p>
            Worked with a team to build a local chat hosting platform,
            incorporating advanced features for file sharing and messaging.
          </p>
        </li>
        <li>
          <strong>Farm Admin Portal (02/2024 - Present):</strong>
          <p>
            Spearheaded the development of a comprehensive admin portal for
            managing a farm and dairy business, handling both frontend and
            backend responsibilities.
          </p>
        </li>
        <li>
          <strong>Exchange Rate Website (02/2024 - 05/2024):</strong>
          <p>
            Developed a user-friendly website that allows clients to submit
            currency exchange trades and to check the current exchange rate as
            part of a software development lab.
          </p>
        </li>
        <li>
          <strong>
            AUB Physics Summer Program Participant (07/2019 - 08/2019):
          </strong>
          <p>
            Engaged in immersive physics studies and laboratory work, expanding
            my academic foundation and scientific understanding.
          </p>
        </li>
        <li>
          <strong>Youtuber (09/2017 - 03/2021):</strong>
          <p>
            Grew an engaged audience of 3,000 subscribers and accumulated a
            total of 1.6 million views by producing and sharing compelling
            content routinely.
          </p>
        </li>
        <li>
          <strong>Stage Manager for AUB Outdoors (04/2023 - 05/2023):</strong>
          <p>
            Served as stage manager taking care of the main acts and
            coordinating stage preparations, ensuring timely performances and
            smooth transitions between slots for all performers during the
            renowned annual event.
          </p>
        </li>
        <li>
          <strong>Metallica tribute concert (08/2023 - 02/2024):</strong>
          <p>
            Executed comprehensive project management and performed as the
            drummer for Aeterna who played the first Metallica tribute show in
            years at Metro Al Madina, successfully filling the venue with 600
            attendees through a strategic marketing and sales campaign.
          </p>
        </li>
      </ul>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.aboutTitle}> Skills</p>
      <div className={styles.skills}>
        {[
          "Java",
          "Python",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "React",
          "React Native",
          "Next.js",
          "Git",
          "Maven",
          "Jenkins",
          "Firebase",
          "Microsoft Office",
          "Adobe Photoshop",
          "Adobe Premiere Pro",
          "Adobe After Effects",
          "Latex",
        ].map((v, i) => (
          <div key={i} className={styles.skillBox}>
            {v}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.aboutTitle}> Hobbies</p>
      <p className={styles.hobbyText}>
        As a drummer, I've played in many events and with hundreds of musicians.
        My main band is Bliss, a local grunge/indie project based in Beirut.
        Check us out on{" "}
        <a href="https://www.instagram.com/bliss.s.s.s/">instagram.</a>
      </p>
      <p className={styles.hobbyText}>
        Below are some images of me playing in my favourite events
      </p>
      <div className={styles.hobbyImages}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v, i) => (
          <img
            key={i}
            className={styles.hobby}
            src={`/${v}.png`}
            alt={`drumming ${v}`}
          />
        ))}
      </div>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.aboutTitle}>
        {" "}
        Download my CV{" "}
        <a href="/IbrahimElKhansaCV.pdf" download="IbrahimElKhansaCV.pdf">
          here
        </a>
      </p>
    </div>
  </div>
);

export default Home;
