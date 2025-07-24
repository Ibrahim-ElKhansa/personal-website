import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Image, { StaticImageData } from "next/image";
import ProfilePic from "@/../public/profile-pic.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ImageZero from "@/../public/drumming/0.png";
import ImageOne from "@/../public/drumming/1.png";
import ImageTwo from "@/../public/drumming/2.png";
import ImageThree from "@/../public/drumming/3.png";
import ImageFour from "@/../public/drumming/4.png";
import ImageFive from "@/../public/drumming/5.png";
import ImageSix from "@/../public/drumming/6.png";
import ImageSeven from "@/../public/drumming/7.png";
import ImageEight from "@/../public/drumming/8.png";
import ImageNine from "@/../public/drumming/9.png";
import CoursisImage from "@/../public/projects/coursis.png";
import HadiImage from "@/../public/projects/hadi.png";
import MusiclebImage from "@/../public/projects/musicleb.png";
import MelodyMitsImage from "@/../public/projects/melody-mits.png";
import MaqamNetwork from "@/../public/projects/maqam-network.png";
import AazawaakImage from "@/../public/projects/aazawaak.png";
import WheresMyShattafeImage from "@/../public/projects/wheres-my-shattafe.png";
import MyUnfollowersImage from "@/../public/projects/my-unfollowers.png";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  subTitle: string;
  description: string;
  link: string;
  image: StaticImageData;
  period: string;
}

export default function HomePage() {
  const skills = ["Javascript", "Typescript", "React", "Next.js", "Node.js", "Express.js", "Firebase", "MongoDB", "Supabase", "PostgreSQL", "Java", "Python", "Machine Learning", "Git", "HTML/CSS"];

  const experiences: Experience[] = [
    {
      company: "American University of Beirut",
      role: "Part Time Research Assistant",
      period: "June 2025 - Present",
      description:
        "Conducting research in computational musicology and interactive music systems. Leading the development of software tools that facilitate the study of Arabic music theory, with a focus on tuning systems, maqamat, ajnas and their transpositions.",
    },
    {
      company: "Murex",
      role: "Java Software Development Intern",
      period: "June 2024 - Aug 2024",
      description:
        "Completed a three-month internship at Murex as a Java Software Developer in the BPM Deimos team, where I built new Java Swing UI components, refactored backend systems for MX3, and worked with different teams to deliver features that are now used by banks worldwide.",
    },
    {
      company: "Fits Consulting",
      role: "Digital Transformation Consultant Intern",
      period: "Aug 2022 - Nov 2022",
      description:
        "Streamlined business processes using Bizagi to make daily operations more efficient. Created flowcharts and admin portals for clients using Bizagi and Java. Collaborated with teams to meet business needs and delivered solutions that improved operational efficiency and client satisfaction.",
    },
    {
      company: "American University of Beirut",
      role: "Coding Tutor",
      period: "Sep 2021 - May 2024",
      description:
        "Conducted engaging lectures for Python, C++, and VHDL classes, helping over 30 students per session. Created and shared valuable online tutoring materials to make learning resources accessible to all students.",
    },
  ];

  const projects: Project[] = [
    {
      title: "My Unfollowers",
      subTitle: "Instagram Followers Analyzer",
      description:
        "A website that gives you insight into your Instagram followers and following lists, showing who follows you back and who doesn’t. Built with Next.js, TypeScript, React, and SCSS.",
      link: "https://my-unfollowers.vercel.app/",
      image: MyUnfollowersImage,
      period: "July 2025 - July 2025",
    },
    {
      title: "Where's My Shattafe",
      subTitle: "Community-Driven Public Bidet Map",
      description:
        "An open-source platform for mapping public toilets with bidets. Features interactive mapping with CartoDB and Leaflet, Google OAuth authentication, real-time location finding, and community-driven submissions with moderation. Built with Next.js 15, Supabase, and TypeScript.",
      link: "https://wheres-my-shattafe.vercel.app",
      image: WheresMyShattafeImage,
      period: "July 2025 - July 2025",
    },
    {
      title: "Maqam Network",
      subTitle: "Arabic Music Theory Platform",
      description:
        "An educational platform for exploring Arabic music theory, featuring maqamat, ajnas, seyr, and tuning systems. Developed tools for transpositions, interactive visualizations, and dynamic audio playback. Built with Next.js, TypeScript, and SCSS.",
      link: "https://arabic-maqam-network.vercel.app/",
      image: MaqamNetwork,
      period: "Feb 2025 - Present",
    },
    {
      title: "MusicLeb",
      subTitle: "Hub for Everything Music Lebanon",
      description:
        "A virtual hub for the Lebanese music scene, connecting musicians, artists, and fans. Developed the full-stack application using Next.js, MongoDB, and Vercel, with a focus on performance optimization and community building.",
      link: "https://www.musicleb.com",
      image: MusiclebImage,
      period: "Jan  2025 – Present",
    },
    {
      title: "Melody Mits",
      subTitle: "Gesture-Controlled MIDI Glove",
      description:
        "A gesture-controlled MIDI glove that maps hand movements into musical commands. Designed to integrate with AI models like RAVE, it allows musicians to create and manipulate sound in real time through intuitive gestures.",
      link: "https://github.com/Ibrahim-ElKhansa/melody-mits",
      image: MelodyMitsImage,
      period: "Sep 2024 - May 2025",
    },
    {
      title: "H.A.D.I.",
      subTitle: "AI-Powered Disease Prediction Platform",
      description:
        "A machine learning-powered platform that predicts diseases based on user-reported symptoms. Integrated OpenAI’s GPT API for medication data, deployed using Docker, Vercel, and Fly.io for scalability and performance.",
      link: "https://hadi-online-doctor.vercel.app",
      image: HadiImage,
      period: "Oct 2024 – Dec 2024",
    },
    {
      title: "Coursis",
      subTitle: "Advanced Scheduling Tool",
      description:
        "A platform that helps students efficiently generate optimal university schedules based on dynamic algorithms, custom data structures, and user preferences. Built entirely using Next.js and Firebase, Coursis now serves over 10,000 users.",
      link: "https://coursis.org",
      image: CoursisImage,
      period: "Nov 2022 – Sep 2024",
    },
    {
      title: "3azaw2ak",
      subTitle: "Mobile Food App",
      description:
        "A cross-platform mobile app for Android and iOS built with React Native, Expo, and Firebase. Developed a serverless backend with Firebase Cloud Functions, real-time data sync with Firebase Realtime Database, and robust authentication using Firebase Authentication and App Check.",
      link: "",
      image: AazawaakImage,
      period: "Jan 2023 – June 2023",
    }
  ];

  const hobbyImages = [ImageZero, ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine];

  return (
    <div className="mainContainer">
      <h1 className="mainTitle">Ibrahim El Khansa Portfolio</h1>
      <section className="headContainer">
        <header className="headContent">
          <div className="image-container">
            <Image src={ProfilePic} alt="Profile Pic" fill sizes="100%" />
          </div>
          <div className="headInformation">
            <div className="headInformation__line-1">Fullstack Web & App Developer</div>
            <div className="headInformation__line-2">Computer Science Engineering Graduate at AUB with a Minor in Economics</div>
            <div className="headInformation__line-3">
              {skills.map((skill, index) => (
                <div className="headInformation__skill" key={index}>
                  {skill}
                </div>
              ))}
            </div>
            <div className="headInformation__line-4">
              <a href={"mailto:ibrahimelkhansa02@gmail.com"} target="_blank" rel="noopener noreferrer">
                <EmailIcon />
                Email
              </a>
              <a href={"https://www.linkedin.com/in/ibrahimelkhansa/"} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href={"/IbrahimElKhansaCV.pdf"} download="IbrahimElKhansaCV.pdf">
                Download My CV
              </a>
            </div>
          </div>
        </header>
      </section>
      <section className="infoContainer">
        <p className="title">About Me</p>
        <p className="aboutDescription">
          I&apos;ve been a full-stack software engineer since 2022, focused on building practical solutions that solve real-world problems and address gaps in the market. I graduated from the American
          University of Beirut in May 2025 with a degree in Computer Science Engineering and a minor in Economics. Ever since I learnt to develop web apps in my second year of college, I have been
          working independently on projects that merge technical expertise with innovative thinking to create value for users and communities.
          <br />
          <br />I take an entrepreneurial approach to software development, identifying opportunities, building solutions from the ground up, and iterating until I deliver something meaningful. My
          projects have been entirely self-directed, and I enjoy working across the full stack to bring ideas to life. I’m always exploring new technologies and approaches to expand my skills and make
          a positive impact through my work.
        </p>
      </section>
      <section className="infoContainer">
        <p className="title">Work Experience</p>
        <div className="experiences">
          {experiences.map((experience, index) => (
            <div className="experience" key={index}>
              <span className="experience__line-1">
                <div className="experience__line-1__header">
                  <h3 className="experienceTitle">
                    <ArrowRightIcon className="icon" />
                    {experience.company}
                  </h3>
                  <span className="experienceRole">{experience.role}</span>
                </div>
                <span className="experience__line-1__period">{experience.period}</span>
              </span>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="infoContainer">
        <h2 className="title">Independent Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="projectImageContainer">
                <Image src={project.image} alt={`Picture of ${project.title}`} fill sizes="100%" />
              </div>
              <div className="projectInformation">
                <div className="projectInformation__line-1">
                  <span className="projectInformation__line-1__header">
                    <h3 className="projectTitle">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <span className="projectSubTitle">{project.subTitle}</span>
                  </span>
                  <span className="projectInformation__line-1__period">{project.period}</span>
                </div>
                <p className="projectInformation__line-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="infoContainer">
        <p className="title"> Hobbies</p>
        <p className="hobbyText">
          Outside of work, I’m also a drummer. I’ve played at events big and small, collaborating with many musicians along the way. Here are a few moments from performances that mean a lot to me:
        </p>
        <div className="hobbyImages">
          {hobbyImages.map((image, i) => (
            <div key={i} className="hobbyImageContainer">
              <Image src={image} alt={`Picture of me drumming ${i + 1}`} fill sizes="100%" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
