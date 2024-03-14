import { IoMdSpeedometer } from "react-icons/io";
import { FaUserAlt, FaWarehouse } from "react-icons/fa";
import {
  BiCheckCircle,
  BiDollarCircle,
  BiMedal,
  BiTimeFive,
} from "react-icons/bi";

export const COMPANY_NAME = "Cahaya Sinar Makmur";
export const COMPANY_ADDRESS = "Jl. Pejagalan Raya No. 85K";
export const COMPANY_ADDRESS_2 = "Jakarta, 11240";
export const COMPANY_ADDRESS_3 = "Indonesia";
export const COMPANY_PHONE = "+62 819 058 7 5858";
export const COMPANY_EMAIL = "steventjoa89@gmail.com";

export const CLIENTS = [
  { name: "myob", image: "/images/clients/client-1.png" },
  { name: "myob", image: "/images/clients/client-2.png" },
  { name: "myob", image: "/images/clients/client-3.png" },
  { name: "myob", image: "/images/clients/client-4.png" },
  { name: "myob", image: "/images/clients/client-5.png" },
  { name: "myob", image: "/images/clients/client-6.png" },
];

export const ABOUT_US_HOME = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit",
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

export const WHY_US_TITLE = "Why choose ";
export const WHY_US_TITLE_STRONG = "Cahaya Sinar Makmur";
export const WHY_US_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit";

export const WHY_US_POINTS = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
];

export const SERVICES_ITEMS = [
  {
    icon: <BiCheckCircle />,
    title: "Quality",
    description:
      "At Cahaya Sinar Makmur, quality is at the core of everything we do. We strive to provide our customers with the highest quality chemical products.",
  },
  {
    icon: <BiMedal />,
    title: "Experience",
    description:
      "With over 20 years of experience in Indonesia, PT. Cahaya Sinar Makmur is the perfect partner for your company.",
  },
  {
    icon: <BiDollarCircle />,
    title: "Cost-Effective",
    description:
      "Why settle for costly materials when we can deliver the same quality at a lower price? Explore our special pricing options designed for your business.",
  },
  {
    icon: <FaUserAlt />,
    title: "Service Oriented",
    description:
      "Experience our customer-centric approach, where both new and existing customers receive the exceptional service they deserve.",
  },
  {
    icon: <BiTimeFive />,
    title: "On-Time Delivery",
    description:
      "Struggling to manage and track your orders? Our trained service agents guarantee on-time delivery of your goods.",
  },
  {
    icon: <FaWarehouse />,
    title: "Large Warehouse",
    description:
      "Situated near Daan Mogot road, PT. Cahaya Sinar Makmur's Indonesia Logistic Center features a sizable warehouse. Our expansive storage capacity guarantees that all chemicals comply with regulatory standards and quality requirements.",
  },
  {
    icon: <IoMdSpeedometer />,
    title: "Efficiency",
    description:
      "We believe that efficiency rests on three key pillars: Cost-effectiveness, Convenience, and Customer Satisfaction. By upholding these pillars, we ensure that we meet our efficiency standards.",
  },
];

export const TOTAL_PRODUCTS_OVERVIEW = 5;
export const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    category: ["a"],
    image: "/images/products/portfolio-1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    category: ["a", "b"],
    image: "/images/products/portfolio-2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    category: ["a"],
    image: "/images/products/portfolio-3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    category: ["a"],
    image: "/images/products/portfolio-4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    category: ["c"],
    image: "/images/products/portfolio-5.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    category: ["c"],
    image: "/images/products/portfolio-6.jpg",
  },
];

export const FAQS = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },
];

export const USEFUL_LINKS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Services", link: "/services" },
  { name: "Terms of service", link: "/terms-of-service" },
  { name: "Privacy Policy", link: "/privacy-policy" },
];

export const OUR_SERVICES = [
  { name: "Product", link: "/product" },
  { name: "Marketing", link: "/marketing" },
];
