const about = {
  title: "Hi 👋 , I am Aadit Juneja",
  description:
    "I am a student at the University of Pennsylvania studying computer science and finance through the M&T Program. I am from Elgin, Illinois, and like to play basketball, tennis, and read interesting Substacks.",
  github: "https://github.com/ajuneja23",
  linkedin: "https://www.linkedin.com/in/aadit-juneja/",
  cv: "#",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Youtube Clone",
      short:
        "Features Firebase authentication, video upload, and video streaming.",
      description:
        "it is a video-sharing app built using Firebase for authentication, and data persistence. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi incidunt, repellendus doloribus voluptates debitis porro ut illo eaque repudiandae corporis tenetur unde quae consectetur obcaecati iusto nostrum expedita iste! ",
      technologies: ["#React.js", "#MUI", "#Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Next.js Blog",
      short:
        "Features JWT authentication, headless CMS, and full CRUD operations.",
      description:
        "it is a Next.js blog site built using Strapi (a headless CMS). Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi incidunt, repellendus doloribus voluptates debitis porro ut illo eaque repudiandae corporis tenetur unde quae consectetur obcaecati iusto nostrum expedita iste! and also lorem",
      technologies: ["#Next.js", "#MUI", "#Strapi", "#JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: "File Sharing App",
      short:
        "Features multi-file upload, sharing links with expiration and document preview.",
      description:
        "it is a file sharing app built using the MERN stack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi incidunt, repellendus doloribus voluptates debitis porro ut illo eaque repudiandae corporis tenetur unde quae consectetur obcaecati iusto nostrum expedita iste!",
      technologies: [
        "#React.js",
        "#MUI",
        "#Express.js",
        "#Node.js",
        "#MongoDB",
      ],
      github: "#",
      demo: "#",
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Incoming Quantitative Trading Intern",
      company: "Five Rings Capital",
      duration: "Jan 2025",
      description: "In January, I will be a quantitative trading intern at Five Rings Capital."
    },
    {
      title: "Research Assistant",
      company: "University of Pennsylvania",
      duration: "Jun 2024 - Aug 2024",
      description:
        "As part of the Xiao Lab, I researched multimodal language model frameworks built on top of Llama and 3D Residual U-Net models to contour malignant tumors.",
    }, {
      title: "Data Science Consultant",
      company: "Petco",
      duration: "Feb 2024 - May 2024",
      description: "I worked with Petco to solve various needs within their marketing campaigns as part of the Wharton Analytics Fellows."
    }
  ],
};

const skills = {
  title: "Interests",
  mySkills: [
    {
      title: "Technical",
      skills: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#React.js",
        "#Next.js",
        "#MUI",
        "#Node.js",
        "#Express.js",
        "#Java",
        "C++",
        "Python",
      ],
    },
    {
      title: "Databases",
      skills: ["#MongoDB", "#PostgreSQL", "#Firebase"],
    },
    {
      title: "Others",
      skills: ["#Git",],
    },
  ],
};

export { about, projects, experience, skills };
