import project1 from "@/assets/1yearproject.jpg";
import project2 from "@/assets/teafactory.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "Ulindu Kavmina",
  studentNumber: "CT/2022/003",
  degree: "Bachelor of Information and Communication Technology Honours (BICT Hons)",
  faculty: "Faculty of Computing and Technology",
  university: "University of Kelaniya",
  tagline: "Aspiring ICT Undergraduate | UI/UX Designer | Full-Stack Developer | Tech Enthusiast",
  email: "ukmadduma@gmail.com",
  linkedin: "https://www.linkedin.com/in/ulindu-kavmina-336b75296/",
  github: "https://github.com/WalpalaUKM",
};

export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
  ],

  backend: [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "Java", level: 60 },
    { name: "Python", level: 65 },
  ],

  database: [
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 65 },
  ],

  tools: [
    { name: "Git & GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Postman", level: 70 },
  ],
};

export const projects = [
  {
    title: "Smart Home Automation",
    course: "Design Ideation and Creative Development CTEC11203",
    objective: "Design an IoT system to control household appliances via mobile.",
    tech: ["Figma"],
    description:
      "This project is a smart system that allows farmers,investors and customers connectand share informations about sri lanka agriculture industry.This is mobile app that provides facilities to ",
    role: "UI/UX designer",
    outcome: "Reduced household energy use by ~22% in pilot testing.",
    image: project1,
    github: "#",
    live: "#",
  },
  {
    title: "Student Performance Dashboard",
    course: "Project In Technology CTEC11302",
    objective: "Visualize academic performance trends for faculty insights.",
    tech: ["Figma","Flutter" ],
    description: "A responsive web dashboard with role-based access and exportable reports.",
    role: "Developer and UI/UX designer",
    outcome: "Adopted as a teaching aid by two course modules.",
    image: project2,
    github: "#",
    live: "#",
  },
  {
    title: "Campus Companion App",
    course: "Mobile Computing",
    objective: "Centralize timetables, notices and resources for undergraduates.",
    tech: ["Flutter", "Firebase", "Figma"],
    description: "A cross-platform app focused on accessibility and offline-first usability.",
    role: "UI/UX designer & mobile developer",
    outcome: "150+ active users in beta within first month.",
    image: project3,
    github: "#",
    live: "#",
  },
  {
    title: "Custom PCB Power Supply",
    course: "Analog Electronics",
    objective: "Design and fabricate a regulated dual-rail PSU.",
    tech: ["Eagle CAD", "Multisim", "Soldering"],
    description: "From schematic to fabricated PCB — a hands-on hardware capstone.",
    role: "Sole designer & fabricator",
    outcome: "Achieved ±0.05V regulation across full load.",
    image: project4,
    github: "#",
    live: "#",
  },
];

export const goals = {
  shortTerm: [
    "Complete my bachelor's degree with a strong academic performance.",
    "In the near future I try to join a software company as an junior developer to gain real industry experience.",
    "Join university or inter university competitions and hackathons to improve my problem-solving skills and gain more experience.",
  ],
  longTerm: [
    "Looking ahead to ,I plan to start my master's degree so that i want to get deeper knowledge in the AI and Software Engineering field.",
    "Over the next five years I aim to join a top software company in Sri Lanka and gain experience in software development.",
    "Eventually, I aspire to take on leadership roles in the software engineering field as a Tech Lead or Software Architect.",
  ],
  toDevelop: [
    "Software Fundamentals and Best Practices",
    "Critical Thinking and Problem-Solving",
    "Research and Academic Writing",
    "Professional UI/UX Design Principles",
  ],
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export const morePages = [
  { path: "/field-visits", label: "Field Visits" },
  { path: "/club-activities", label: "Club Activities" },
  { path: "/research", label: "Research & Academic" },
  { path: "/certifications", label: "Certifications" },
  { path: "/achievements", label: "Achievements" },
  { path: "/reflections", label: "Reflections" },
];
