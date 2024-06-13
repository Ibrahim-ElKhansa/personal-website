import React, { useState, useEffect } from "react";
import styles from "../styles/Common.module.css";
import { db, storage } from "../../firebase";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

interface project {
  title: string;
  role: string;
  startTime: string;
  endTime: string;
  description: string;
  priority: number;
}
const Home: React.FC = () => {
  const [aboutMe, setAboutMe] = useState("");
  const [projects, setProjects] = useState<project[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [cvUrl, setCvUrl] = useState("");
  const [hobbyImages, setHobbyImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let numberOfHobbyImages = 0;

      const aboutMeDoc = await getDoc(doc(db, "content", "aboutMe"));
      if (aboutMeDoc.exists()) {
        const aboutMeData = aboutMeDoc.data();
        setAboutMe(aboutMeData.text);
      }

      const hobbyNumberDoc = await getDoc(doc(db, "content", "hobbyNumber"));
      if (hobbyNumberDoc.exists()) {
        const hobbyNumberData = hobbyNumberDoc.data();
        numberOfHobbyImages = hobbyNumberData.amountOfPictures;
      }

      const projectsCollection = collection(
        db,
        "content",
        "projects",
        "content"
      );
      const projectsSnapshot = await getDocs(projectsCollection);

      const projectsList = projectsSnapshot.docs.map(
        (doc) => doc.data() as project
      );

      projectsList.sort((a, b) => a.priority - b.priority);
      setProjects(projectsList);

      const skillsDoc = await getDoc(doc(db, "content", "skills"));
      if (skillsDoc.exists()) {
        const skillsData = skillsDoc.data() as { list: string[] };
        setSkills(skillsData.list);
      }

      const profilePicRef = ref(storage, "Profile.jpg");
      const profilePicUrl = await getDownloadURL(profilePicRef);
      setProfilePicUrl(profilePicUrl);

      const cvRef = ref(storage, "IbrahimElKhansaCV.pdf");
      const cvUrl = await getDownloadURL(cvRef);
      setCvUrl(cvUrl);

      const hobbyImagePromises = Array.from(
        { length: numberOfHobbyImages },
        (_, i) => getDownloadURL(ref(storage, `${i + 1}.png`))
      );
      const hobbyImagesUrls = await Promise.all(hobbyImagePromises);
      setHobbyImages(hobbyImagesUrls);
    };

    setLoading(false);
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
        <img src={profilePicUrl} alt="Profile Pic" className={styles.profile} />
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
        <p className={styles.aboutDescription}>{aboutMe}</p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.aboutTitle}> Projects & Experiences</p>
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project.priority}>
              <strong>
                {project.title}
                {project.role ? ` - ${project.role}` : ""} ({project.startTime}{" "}
                - {project.endTime}):
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
          As a drummer, I've played in many events and with hundreds of
          musicians. My main band is Bliss, a local grunge/indie project based
          in Beirut. Check us out on{" "}
          <a href="https://www.instagram.com/bliss.s.s.s/">instagram.</a>
        </p>
        <p className={styles.hobbyText}>
          Below are some images of me playing in my favourite events
        </p>
        <div className={styles.hobbyImages}>
          {hobbyImages.map((url, i) => (
            <img
              key={i}
              className={styles.hobby}
              src={url}
              alt={`drumming ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.downloadTitle}>
          {" "}
          Download my CV{" "}
          <a href={cvUrl} download="IbrahimElKhansaCV.pdf">
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
