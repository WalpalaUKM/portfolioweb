import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "Ulindu Kavmina",
  studentNumber: "CT/2022/003",
  degree: "Bachelor of Information and Communication Technology Honours (BICT Hons)",
  faculty: "Faculty of Computing and Technology",
  university: "University of Kelaniya",
  tagline: "Aspiring ICT Undergraduate | UI/UX Designer | Full-Stack Developer | Tech Enthusiast",
  email: "ulindu.kavmina@example.com",
  linkedin: "https://linkedin.com/in/ulindu-kavmina",
  github: "https://github.com/ulindu-kavmina",
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
    course: "Embedded Systems",
    objective: "Design an IoT system to control household appliances via mobile.",
    tech: ["Arduino", "ESP32", "MQTT", "React Native"],
    description:
      "An end-to-end IoT solution with sensor-driven automation, mobile control, and a real-time analytics dashboard.",
    role: "Hardware lead & full-stack developer",
    outcome: "Reduced household energy use by ~22% in pilot testing.",
    image: project1,
    github: "#",
    live: "#",
  },
  {
    title: "Student Performance Dashboard",
    course: "Database Systems",
    objective: "Visualize academic performance trends for faculty insights.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    description: "A responsive web dashboard with role-based access and exportable reports.",
    role: "Frontend developer & UI/UX designer",
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
    "Master modern full-stack development (React, Node, TypeScript).",
    "Complete an industry internship in software or IoT.",
    "Contribute to at least 3 open-source projects.",
  ],
  longTerm: [
    "Become a Software Engineer specializing in IoT & cloud systems.",
    "Pursue a Master's degree abroad.",
    "Found a tech startup focused on smart sustainable living.",
  ],
  toDevelop: [
    "Cloud platforms (AWS / GCP)",
    "Machine Learning fundamentals",
    "Embedded Linux & RTOS",
    "Advanced UI/UX research methods",
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
