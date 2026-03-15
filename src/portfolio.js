/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Praneeth Guptha Karamalaputti",
  title: "Hi all, I'm Praneeth",
  subTitle: emoji(
    "AI Engineer and Master's student in Computer Science at the University at Buffalo, focused on Machine Learning, Generative AI, RAG pipelines, agentic AI systems and production-ready intelligent applications."
  ),
  resumeLink: "https://drive.google.com/file/d/1VdMqVrJ0ovOKyfcpoSNMPpfRQOERg03Q/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/praneethkaramalaputti",
  linkedin: "https://www.linkedin.com/in/praneethgupthak/",
  gmail: "praneethgupthaub2025@gmail.com",
  kaggle: "https://www.kaggle.com/praneethguptha",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AI ENGINEER BUILDING ML, GENAI, RAG AND AGENTIC SYSTEMS FOR REAL-WORLD APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build end-to-end AI applications using Python, machine learning and deep learning frameworks"
    ),
    emoji(
      "⚡ Design Generative AI and Retrieval-Augmented Generation pipelines with vector search, embeddings and LLM orchestration"
    ),
    emoji(
      "⚡ Develop agentic workflows using LangChain, LangGraph, AutoGen and modern cloud-native tooling"
    )
  ],

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Deep Learning",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Large Language Models",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Generative AI",
    fontAwesomeClassname: "fas fa-magic"
  },
  {
    skillName: "LangChain",
    fontAwesomeClassname: "fas fa-link"
  },
  {
    skillName: "LangGraph",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "SQL / Databases",
    fontAwesomeClassname: "fas fa-database"
  }
],
display: true
};
// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University at Buffalo, SUNY",
      logo: require("./assets/images/ub.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2025 - Present",
      desc: "Specializing in Artificial Intelligence and Machine Learning.",
      descBullets: [
        "Focused on machine learning, computer vision, intelligent systems and production-grade AI engineering",
        "Building academic and portfolio projects in deep learning, RAG and agentic AI systems",
        "Coursework: Machine Learning, Deep Learning, Operating Systems, Database Management, Bigdata, Computer Vision"
      ]
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "AI / ML Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Generative AI / RAG / Agents",
      progressPercentage: "88%"
    },
    {
      Stack: "Backend / Cloud / MLOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs1.png"),
      date: "Sept2022-Dec2024",
      desc:
        "Worked on end-to-end development, training and deployment of AI/ML models for real-world enterprise applications",
      descBullets: [
        "Focused on developing AI models using PyTorch and TensorFlow and built scalable data pipelines with PySpark and big data tools.",
        "Beyond model development, I was actively involved in end-to-end deployment using Docker and cloud platforms, gaining hands-on experience in MLOps practices for production-ready AI solutions"
      ]
    },
    {
      role: "Student Intern",
      company: "Cognizant",
      companylogo: require("./assets/images/cts.png"),
      date: "Feb2022-Jun2022",
      desc:
        "Worked on Machine Learning and software engineering tasks involving model development, backend services and deployment-oriented workflows.",
      descBullets: [
        "Worked on classical and deep learning models with Python, scikit-learn and TensorFlow, while performing exploratory data analysis (EDA) to strengthen insights.",
        "This experience reinforced my strong foundation in machine learning fundamentals and practical problem-solving"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "AI, ML, AND AGENTIC SYSTEMS I BUILT ACROSS ACADEMIC, PROFESSIONAL, AND PORTFOLIO WORK",
  projects: [
    {
      image: require("./assets/images/agent.webp"),
      projectName: "Agentic RAG Developer Assistant",
      projectDesc:
        "Built an AI assistant for long-form document understanding using retrieval, vector search, structured outputs, and LLM orchestration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/praneethkaramalaputti"
        }
      ]
    },
    {
      image: require("./assets/images/multi.webp"),
      projectName: "Multi-Agent AI Workflow / NL-to-SQL System",
      projectDesc:
        "Designed an agent-based AI workflow that translates natural language into structured system actions and database interactions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/praneethkaramalaputti"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Selected accomplishments, certifications, and technical milestones from my AI engineering journey.",

  achievementsCards: [
    {
      title: "AI / GenAI Portfolio Projects",
      subtitle:
        "Built multiple hands-on projects in RAG, agentic AI, LLM workflows, ML systems, and AI application engineering.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Project Logo",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/praneethkaramalaputti"
        }
      ]
    },
    {
      title: "Master's in Computer Science",
      subtitle:
        "Currently pursuing MS in Computer Science at the University at Buffalo with focus on AI and Machine Learning.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "University Logo",
      footerLink: [
        {
          name: "University",
          url: "https://www.buffalo.edu/"
        }
      ]
    },
    {
      title: "Professional AI Engineering Experience",
      subtitle:
        "Worked across enterprise environments building AI, ML, and software systems with practical business impact.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Work Logo",
      footerLink: [
        {
          name: "LinkedIn",
          url: "PASTE_YOUR_LINKEDIN_URL_HERE"
        }
      ]
    }
  ],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy documenting what I learn in AI engineering, GenAI systems, and production-ready ML workflows.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Technical talks, knowledge sharing, and community engagement"),

  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcasts and audio appearances",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an AI project, full-time opportunity or just say hi.",
  number: "+1-716-750-7956",
  email_address: "praneethgupthaub2025@gmail.com",
  display: true

};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
