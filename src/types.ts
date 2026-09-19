export type Role = "farmer" | "admin";

export type Tone = "green" | "orange" | "red";

export interface CropLogEntry {
  crop: string;
  plot: string;
  status: string;
  tone: Tone;
}

export interface Article {
  category: string;
  title: string;
  description: string;
  author?: string;
  views?: number | null;
  status?: "Published" | "Draft";
}

export interface FarmerRecord {
  name: string;
  contact: string;
  location: string;
  crops: string;
  joined: string;
  status: "Active" | "Pending" | "Suspended";
}

export interface CropRecord {
  farmer: string;
  cropPlot: string;
  stage: string;
  health: "Healthy" | "Ready to Harvest" | "Check pests";
  lastUpdated: string;
  estHarvest: string;
}

export interface SmsLogEntry {
  timestamp: string;
  location: string;
  alertType: string;
  recipients: number;
  delivery: "Delivered" | "Failed";
}

export interface AssistantLogEntry {
  farmer: string;
  question: string;
  topic: string;
  time: string;
  status: "Answered" | "Flagged";
}
