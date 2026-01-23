import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "FurSure",
    shortDescription: "Pet care platform connecting owners and service providers.",
    description: "The purpose of this document is to describe the software requirements for FurSure: Your Go-To Pet Care Companion. This document describes the functional and non-functional requirements of the system, including its interfaces, features, performance expectations, and user interaction behavior. FurSure is a mobile application designed to assist pet owners in discovering, booking, and managing essential pet care services such as grooming and veterinary appointments. It also enables service providers to manage their offerings, bookings, and communication with clients.",
  },
   {
    id: "2",
    title: "Student Management System",
    shortDescription: "CRUD app using PHP and MySQL.",
    description: "A full-featured web-based student management system developed using PHP and MySQL. The application supports complete CRUD (Create, Read, Update, Delete) operations for managing student profiles, including student numbers, personal details, and contact information. It also includes subject management and enrollment functionality, allowing administrators to assign multiple subjects to each student and view enrolled students per subject. The system implements data validation to prevent duplicate student records, search and filtering features for quick lookup, and a clean, user-friendly interface designed for efficient academic record management.",
  },
  {
    id: "3",
    title: "Computer Shop System",
    shortDescription: "CRUD app using PHP and MySQL.",
    description: "A comprehensive computer shop management system built with PHP and MySQL that focuses on tracking customer sessions and computer usage in real time. The system records login and logout timestamps, calculates total usage duration, and generates detailed usage reports for daily and monthly summaries. It includes customer account management, session-based access control, and administrative dashboards for monitoring active computers. The application also provides reporting and logging features to support business analytics, helping shop owners manage operations, track revenue, and maintain accurate usage history efficiently.",
  },
];
