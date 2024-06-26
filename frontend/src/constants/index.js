import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notification5,
  notification6,
  notification7,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  facebooklogo,
  sherpalogo,
  globaledgelogo,
  googlelogo,
  accenturelogo,
  collab,
  ai,
  seo,
  socialMedia,
  thoughtLeadership,
  newsletter,
  websiteDevelopment,
  leadGeneration,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "/services",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contactUs",
  },
  //   {
  //     id: "5",
  //     title: "New account",
  //     url: "#signup",
  //     onlyMobile: true,
  //   },
  //   {
  //     id: "6",
  //     title: "Sign in",
  //     url: "#login",
  //     onlyMobile: true,
  //   },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [
  notification7,
  notification6,
  notification5,
  notification4,
  notification3,
  notification2,
];

export const companyLogos = [
  sherpalogo,
  globaledgelogo,
  googlelogo,
  accenturelogo,
  facebooklogo,
];

export const BanyanServices = [
  "Brand & Content Creation",
  "Onsite & Offsite SEO",
  "Newsletter Genernation",
  "Customer Outreach",
];

export const BanyanServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch technology, it's the perfect solution for teams looking to market smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Automation",
    text: collabText,
  },
  {
    id: "1",
    title: "Top-notch Artificial Intelligence",
  },
  {
    id: "2",
    title: "In House Experts",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Collaboration",
    icon: collab,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Artificial Intelligence",
    icon: ai,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Search Engine Optimization",
    icon: seo,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Social Media",
    icon: socialMedia,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Thought Leadership",
    icon: thoughtLeadership,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Newsletter",
    icon: newsletter,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Website Development",
    icon: websiteDevelopment,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Lead Generation",
    icon: leadGeneration,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Branding & Content Creation",
    text: "AI aids branding and content creation by analyzing consumer data to generate personalized content and tailor branding strategies.",
    backgroundUrl: "./src/assets/services/card-1.svg",
    iconUrl: serviceIcon1,
    imageUrl: serviceImage2,
  },
  {
    id: "1",
    title: "Onsite & Offsite Search Engine Optimization",
    text: "AI boosts SEO with content optimization, data analysis, link-building, technical audits, voice search, and predictive analytics.",
    backgroundUrl: "./src/assets/services/card-2.svg",
    iconUrl: serviceIcon2,
    imageUrl: serviceImage2,
    light: true,
  },
  {
    id: "2",
    title: "Newsletter & Email Marketing",
    text: "AI improves email marketing with personalized content, segmented audiences, automated campaigns, and metrics for better results.",
    backgroundUrl: "./src/assets/services/card-3.svg",
    iconUrl: serviceIcon3,
    imageUrl: serviceImage2,
  },
  {
    id: "3",
    title: "Customer Outreach",
    text: "AI streamlines customer outreach through personalized interactions, data analysis, and chatbot deployment, enhancing engagement.",
    backgroundUrl: "./src/assets/services/card-4.svg",
    iconUrl: serviceIcon4,
    imageUrl: serviceImage2,
    light: true,
  },
  {
    id: "4",
    title: "Social Media",
    text: "AI optimizes social media by automating content creation, analyzing audience behavior, and managing ad campaigns for maximum engagement.",
    backgroundUrl: "./src/assets/services/card-5.svg",
    iconUrl: serviceIcon1,
    imageUrl: serviceImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "Our AI utilizes natural language processing to understand user needs and deliver accurate and up-to-date content.",
    backgroundUrl: "./src/assets/services/card-6.svg",
    iconUrl: serviceIcon2,
    imageUrl: serviceImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
