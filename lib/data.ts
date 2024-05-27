import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuCircuitBoard, LuGraduationCap, LuLaptop } from "react-icons/lu";
import corpcommentImg from "@/public/DevPostThumbNail.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of California, San Diego",
    location: "Undergraduate",
    description:
      "Pursuit of a B.S. in Computer Engineering was cut short by a car accident",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - January 2022",
  },
  {
    title: "Chapman University",
    location: "Undergraduate",
    description:
      "Currently pursuing a B.S. in Computer Science after transferring from UCSD",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - May 2026",
  },
  {
    title: "Etezad Research Lab",
    location: "Research Assistant",
    description:
      "Conducted research literature reviews and published a manuscript for publication to a peer-reviewed journal focused on refreshable braille displays",
    icon: React.createElement(LuCircuitBoard),
    date: "March 2024 - Present",
  },
  {
    title: "TOBESOFT",
    location: "Software Engineering Intern",
    description:
      "Incoming intern for Summer 2024",
    icon: React.createElement(LuLaptop),
    date: "July 2024 - August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Power to the People",
    description:
      "An iOS app that serves as a mobile black box during traffic stops with storing and exporting features. Winner of the President's Pick award at CruzHacks 2024.",
    tags: ["Python", "Swift", "SwiftData", "SwiftUI", "FireBase"],
    imageUrl: corpcommentImg,
    projectUrl: "https://devpost.com/software/power-to-the-people-lbhxyd"
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
