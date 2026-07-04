/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yash Khandelwal",
  title: "Hi, I am Yash",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with hands-on backend experience. Builds and tests Python applications, integrates REST APIs, and collaborates on production codebases using FASTAPI, Git, and React. Seeking to bring real-world backend skills to a team that moves fast."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1KutC4q5acU_45RYb2uQt-mMtu19FS6Vl", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  avatar_img_path: require("./assets/images/Profile Picture.png") // Update this link or require a local image to change your profile picture!
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yashkhandelwal16",
  linkedin: "https://www.linkedin.com/in/yash-khandelwal-cse/",
  gmail: "ykhandelwal158@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What My Arsenals",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop AI-ready full-stack web applications with modern frontend and Python backend technologies"
    ),
    emoji("⚡ Develop secure backend APIs with Python, FastAPI, SQLAlchemy and MySQL"),
    emoji(
      "⚡ Deploy scalable full-stack applications using Git, GitHub, Render, Vercel, and modern cloud technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
      docUrl: "https://react.dev/"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
      docUrl: "https://git-scm.com/doc"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github",
      docUrl: "https://docs.github.com/"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      docUrl: "https://docs.npmjs.com/"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database",
      docUrl: "https://www.w3schools.com/sql/"
    },
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-robot",
      docUrl: "https://www.ibm.com/topics/automation"
    },
    {
      skillName: "Deployment",
      fontAwesomeClassname: "fas fa-cloud-upload-alt",
      docUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      docUrl: "https://docs.python.org/3/"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      docUrl: "https://docs.docker.com/"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server",
      docUrl: "https://fastapi.tiangolo.com/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Medicaps University",
      logo: require("./assets/images/image.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2024 - June 2028",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering at Medicaps University. Developing a strong foundation in software engineering, data structures, algorithms, databases, and modern web technologies while working on real-world projects.",
      descBullets: [
        "Maintaining a strong academic record while strengthening problem-solving and software development skills.",
        "Gaining practical experience through full-stack projects, AI-powered applications, and deployment"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Tools & Technologies",
      progressPercentage: "68%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "IIT Kharagpur",
      companylogo: require("./assets/images/iit kharagpur.jpg"),
      color: "linear-gradient(135deg, #3590e8 0%, #6cb4f5 100%)",
      date: "June 2025 – July 2025",
      desc: "Completed a one-month onsite internship at IIT Kharagpur under the guidance of Prof. Pawan Goyal, focusing on Text Analytics using Python. Worked on Natural Language Processing (NLP), Machine Learning, and Deep Learning fundamentals while applying Python to real-world text processing problems.",
      descBullets: [
        "Learned NLP concepts including text preprocessing, tokenization, and sentiment analysis."
      ],
      footerLink: [
        {
          name: "Verify Certificate",
          url: require("./assets/images/IIT KGP Certificate.png")
        }
      ]
    },
    {
      role: "Contributer",
      company: "Elite Coders",
      companylogo: require("./assets/images/elite coders.avif"),
      color: "linear-gradient(135deg, #da6fa6ff 0%, #eb7eb8 100%)",
      date: "Jan 2026 – March 2026",
      desc: "Contributed to multiple open-source projects during Elite Coders Winter of Code (ECWoC 2026). Collaborated with mentors and developers, improved project features, fixed bugs, and strengthened Git & GitHub collaboration skills.",
      descBullets: [
        "Improved collaboration using Git, GitHub, pull requests, and code reviews."
      ],
      footerLink: [
        {
          name: "Verify Certificate",
          url: require("./assets/images/EcWOC'26 (1).png")
        }
      ]
    },
    {
      role: "Python Intern",
      company: "Eduskills Academy",
      companylogo: require("./assets/images/eduskills.png"),
      date: "April 2026 – June 2026",
      desc: "Completed a full-stack development internship focused on building modern web applications using React.js for the frontend and FastAPI for the backend. Gained hands-on experience in REST API development, frontend integration, and database operations while working on real-world projects.",
      descBullets: [
        "Developed responsive user interfaces using React.js and integrated them with FastAPI REST APIs."
      ],
      footerLink: [
        {
          name: "Verify Certificate",
          url: require("./assets/images/Internship_Certificate.jpg")
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Showcasing my skills through real-world projects.",
  projects: [
    {
      image: require("./assets/images/SmartNotes.png"),
      projectName: "Smart Notes",
      projectDesc: "A secure full-stack notes application for creating, organizing, and managing notes with ease.It is secure and intuitive platform for managing notes with seamless user experience.",
      footerLink: [
        {
          name: "Github Code",
          url: "https://github.com/yashkhandelwal16/Smart-Notes"
        }
      ]
    },
    {
      image: require("./assets/images/DataStudio.png"),
      projectName: "Data Studio",
      projectDesc: "An interactive data visualization platform that transforms datasets into insightful charts, dashboards, and analytics for better decision-making.",
      footerLink: [
        {
          name: "Github Code",
          url: "https://github.com/yashkhandelwal16/DataStudio"
        }
      ]
    },
    {
      image: require("./assets/images/Pyrun.png"),
      projectName: "Pyrun",
      projectDesc: "A browser-based online code compiler supporting Python programming languages with real-time execution and a clean coding experience with professional themes options.",
      footerLink: [
        {
          name: "GitHub Code",
          url: "https://github.com/yashkhandelwal16/PyRun"
        },
        {
          name: "Live Preview",
          url: "https://pyrun-dtlw.onrender.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gemini Certified Student",
      subtitle:
        "Earned the Gemini Certified Student credential, demonstrating foundational AI knowledge and practical skills.",
      image: require("./assets/images/Google-gemini-AI-for-kids-safety.png"),
      imageAlt: "Google Gemini Logo",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/Gemini Certificate.png")
        }
      ]
    },
    {
      title: "Oracle Foundation Associates",
      subtitle:
        "Earned the Oracle AI Foundations Associate certification, validating core AI and machine learning concepts.",
      image: require("./assets/images/oracle.jpg"),
      imageAlt: "Oracle Foundation Associates Logo",
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/images/eCertificate_page-0001.jpg")
        }
      ]
    },

    {
      title: "Introduction to Data Science",
      subtitle: "Completed Cisco's Introduction to Data Science certification, strengthening my skills in data analysis, visualization.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/images/Cisco_Certificate.png")
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to share others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://openai.com/index/how-agents-are-transforming-work/",
      title: "The Rise of AI Agents : Beyond Traditional Chatbots",
      description:
        "Discover how autonomous AI agents are transforming software development, productivity, and business automation."
    },
    {
      url: "https://www.ibm.com/think/topics/ai-in-software-development",
      title: "AI in Software Engineering : The New Developer Workflow",
      description:
        "Discover how developers use AI for coding, debugging, testing, documentation, and deployment."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7976453898",
  email_address: "ykhandelwal158@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
