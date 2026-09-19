import type {
  Article,
  AssistantLogEntry,
  CropLogEntry,
  CropRecord,
  FarmerRecord,
  SmsLogEntry,
} from "../types";

export const articleData: Article[] = [
  {
    category: "Rice",
    title: "Fertilizer Guide for Rice",
    description:
      "Nutrients, timing, and application basics for a healthy yield.",
    author: "Admin Team",
    views: 842,
    status: "Published",
  },
  {
    category: "Vegetables",
    title: "Common Pests in Tomato Farming",
    description: "How to identify and treat common tomato pests early.",
    author: "Admin Team",
    views: 613,
    status: "Published",
  },
  {
    category: "Staple Crops",
    title: "When to Harvest Corn",
    description: "Signs your corn is ready and how to avoid over-ripening.",
    author: "Agri Officer",
    views: 401,
    status: "Published",
  },
  {
    category: "Fruits",
    title: "Banana Plant Care Basics",
    description: "Watering, spacing, and sucker management for healthy yield.",
    author: "Admin Team",
    views: null,
    status: "Draft",
  },
  {
    category: "Pests & Disease",
    title: "Spotting Leaf Blight Early",
    description: "Warning signs on leaves and simple ways to control spread.",
    author: "Admin Team",
    views: null,
    status: "Draft",
  },
  {
    category: "Vegetables",
    title: "Growing Kangkong at Home",
    description: "Soil, water, and spacing tips for a quick-growing crop.",
    author: "Admin Team",
    views: 288,
    status: "Published",
  },
];

export const activityLogs: CropLogEntry[] = [
  { crop: "Potato", plot: "Plot D", status: "In Progress", tone: "orange" },
  {
    crop: "Tomato",
    plot: "Plot A",
    status: "Ready to harvest",
    tone: "green",
  },
  { crop: "Banana", plot: "Plot B", status: "In progress", tone: "orange" },
];

export const checklistTasks = [
  "Watered plot in the morning",
  "Checked for pest damage",
  "Applied fertilizer",
  "Removed weeds along the rows",
  "Cleared irrigation canal",
  "Removed weeds along the rows",
  "Checked leaf color for disease",
  "Staked young plants",
  "Logged today's rainfall",
  "Inspected drainage canal",
];

export const farmerRecords: FarmerRecord[] = [
  {
    name: "Ador Santos",
    contact: "0976 785 8767",
    location: "Jala-Jala, Rizal",
    crops: "Rice, Corn",
    joined: "Aug 2, 2026",
    status: "Active",
  },
  {
    name: "Jillian Vito",
    contact: "093 675 830",
    location: "Baras, Rizal",
    crops: "Banana",
    joined: "Aug 10, 2026",
    status: "Pending",
  },
  {
    name: "John Tuquero",
    contact: "0977 894 0933",
    location: "Tanay, Rizal",
    crops: "Kangkong",
    joined: "Aug 20, 2026",
    status: "Active",
  },
  {
    name: "Aleana Bello",
    contact: "0967 897 3604",
    location: "Tanay, Rizal",
    crops: "Tomato",
    joined: "July 16, 2026",
    status: "Active",
  },
  {
    name: "Mario Canlas",
    contact: "0907 431 8975",
    location: "Jala-Jala, Rizal",
    crops: "Potato, Rice",
    joined: "Jun 9, 2026",
    status: "Suspended",
  },
];

export const cropTypeCounts = [
  { crop: "Rice", emoji: "🌾", count: 142 },
  { crop: "Corn", emoji: "🌽", count: 98 },
  { crop: "Tomato", emoji: "🍅", count: 76 },
  { crop: "Banana", emoji: "🍌", count: 91 },
  { crop: "Eggplant", emoji: "🍆", count: 54 },
  { crop: "Kangkong", emoji: "🫛", count: 32 },
];

export const cropRecords: CropRecord[] = [
  {
    farmer: "Ador Santos",
    cropPlot: "Rice - Plot A",
    stage: "Tillering",
    health: "Healthy",
    lastUpdated: "Today",
    estHarvest: "Dec 20",
  },
  {
    farmer: "Jillian Vito",
    cropPlot: "Banana - Plot D",
    stage: "Fruiting",
    health: "Ready to Harvest",
    lastUpdated: "2 days ago",
    estHarvest: "Sept 15",
  },
  {
    farmer: "John Tuquero",
    cropPlot: "Kangkong - Plot C",
    stage: "Seedling",
    health: "Check pests",
    lastUpdated: "3 days ago",
    estHarvest: "Sept 30",
  },
  {
    farmer: "Aleana Bello",
    cropPlot: "Tomato - Plot B",
    stage: "Flowering",
    health: "Healthy",
    lastUpdated: "Yesterday",
    estHarvest: "Oct 2",
  },
];

export const smsLogs: SmsLogEntry[] = [
  {
    timestamp: "Today, 6:02 AM",
    location: "Tanay, Rizal",
    alertType: "Heavy Rain Warning",
    recipients: 42,
    delivery: "Delivered",
  },
  {
    timestamp: "Today, 5:45 AM",
    location: "Jala-Jala, Rizal",
    alertType: "Irrigation Reminder",
    recipients: 28,
    delivery: "Delivered",
  },
  {
    timestamp: "Yesterday, 4:15 PM",
    location: "Baras, Rizal",
    alertType: "Harvest Reminder",
    recipients: 6,
    delivery: "Failed",
  },
  {
    timestamp: "Yesterday, 6:00 AM",
    location: "Tanay, Rizal",
    alertType: "Fertilizer Reminder",
    recipients: 33,
    delivery: "Delivered",
  },
];

export const assistantLogs: AssistantLogEntry[] = [
  {
    farmer: "Elena Cruz",
    question: "Bakit namamatay ang dahon ng kamatis ko?",
    topic: "Pest Control",
    time: "10:14 AM",
    status: "Answered",
  },
  {
    farmer: "Ador Santos",
    question: "Kailan dapat mag-ani ng mais?",
    topic: "Harvest Timing",
    time: "9:52 AM",
    status: "Answered",
  },
  {
    farmer: "Aleana Bello",
    question: "Ano ang gamot sa peste ng palay?",
    topic: "Pest Control",
    time: "9:30 AM",
    status: "Flagged",
  },
  {
    farmer: "Jillian Vito",
    question: "Gaano kadalas magdilig ng saging?",
    topic: "Irrigation",
    time: "8:47 AM",
    status: "Answered",
  },
];

export const registrationsOverTime = [
  { label: "April", value: 28, highlight: false },
  { label: "May", value: 42, highlight: false },
  { label: "June", value: 55, highlight: false },
  { label: "July", value: 71, highlight: true },
  { label: "Aug", value: 40, highlight: false },
  { label: "Sept", value: 63, highlight: true },
];

export const cropDistribution = [
  { crop: "Rice", count: 142, max: 150 },
  { crop: "Corn", count: 98, max: 150 },
  { crop: "Tomato", count: 76, max: 150 },
  { crop: "Kangkong", count: 51, max: 150 },
];

export const reportsTable = [
  {
    report: "Monthly User Activity Summary",
    period: "Aug 2026",
    generated: "Sept 1, 2026",
    format: "CSV",
  },
  {
    report: "Crop Health Overview",
    period: "Aug 2026",
    generated: "Sept 1, 2026",
    format: "PDF",
  },
  {
    report: "SMS Delivery Report",
    period: "Aug 2026",
    generated: "Sept 1, 2026",
    format: "PDF",
  },
  {
    report: "AI Assistant Usage Report",
    period: "Aug 2026",
    generated: "Sept 1, 2026",
    format: "CSV",
  },
];
