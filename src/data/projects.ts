import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "FurSure",
    shortDescription: "Pet care platform connecting owners and service providers.",
    description: "FurSure: Your Go-To Pet Care Companion is designed to benefit pet owners and pet-care service providers by addressing their needs thru web-based platforms that enable real-time appointment scheduling, different service discovery, digital pet records and history, as well as AI powered support for different functionalities such as AI Pet Assistant and Recommendations and Monitoring and Support for pet owners and pet-care providers consequently. Additionally, with this platform, pet owners can book services, track pet health, and receive pet care advice conveniently, while providers can manage their appointments, monitor their business performance and communicate with clients efficiently. By implementing FurSure, it will streamline pet care management, reduce operational problems and enhance overall convenience for both pet owners and pet service providers.",
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
