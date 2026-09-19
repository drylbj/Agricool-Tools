import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Cloud, CloudRain, Leaf, MessageSquare, Send, Sprout } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Metric from "../../components/Metric";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <SectionHeading
        eyebrow="Tuesday, September 9, 2025"
        title="Good morning, Aleana."
      />

      <section className="welcome-banner">
        <Sprout className="welcome-banner-watermark" size={220} strokeWidth={1} />
        <div className="welcome-banner-copy">
          <h2>Welcome back! Mang Ariel</h2>
          <p>Check your farm activities</p>
        </div>
      </section>

      <div className="metric-row">
        <Metric label="Active Crops" value="6" />
        <Metric label="Weather Today" value="29°C" />
        <Metric label="Pending Tasks" value="3" />
        <Metric label="Next Harvest" value="12 days" />
      </div>

      <div className="dashboard-grid">
        <DashboardCard
          title="Crop Monitoring"
          icon={<Leaf />}
          action="View all"
          onClick={() => navigate("/farmer/crop-monitoring")}
        >
          <div className="crop-list">
            <StatusRow label="Rice plot A" status="Healthy" tone="green" />
            <StatusRow
              label="Tomato plot A"
              status="Check pests"
              tone="orange"
            />
            <StatusRow label="Banana plot B" status="Healthy" tone="green" />
          </div>
        </DashboardCard>

        <DashboardCard
          title="Weather & SMS"
          icon={<Cloud />}
          action="View all"
          onClick={() => navigate("/farmer/weather")}
        >
          <div className="weather-preview">
            <CloudRain size={65} />
            <div>
              <b>
                Rain expected
                <br />
                tomorrow
              </b>
              <p>SMS alert sent to your phone</p>
            </div>
          </div>
          <div className="mini-forecast">
            <span>
              Today
              <br />
              <b>29°C</b>
            </span>
            <span>
              Tomorrow
              <br />
              <b>27°C</b>
            </span>
            <span>
              Thu
              <br />
              <b>32°C</b>
            </span>
            <span>
              Fri
              <br />
              <b>26°C</b>
            </span>
          </div>
        </DashboardCard>

        <DashboardCard
          title="AI Assistant Hub"
          icon={<MessageSquare />}
          action="Open chat"
          onClick={() => navigate("/farmer/assistant")}
        >
          <div className="assistant-preview">
            <p>"What should I do if my tomato leaves start to curl?"</p>
            <button onClick={() => navigate("/farmer/assistant")}>
              Ask an agricultural question <Send size={16} />
            </button>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Information Hub"
          icon={<BookOpen />}
          action="Browse all"
          onClick={() => navigate("/farmer/information-hub")}
        >
          <div className="info-preview">
            <p>
              <BookOpen size={19} /> Fertilizer guide for rice
            </p>
            <p>
              <BookOpen size={19} /> Common tomato pests
            </p>
            <p>
              <BookOpen size={19} /> Harvest timing basics
            </p>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  icon,
  action,
  onClick,
  children,
}: {
  title: string;
  icon: ReactNode;
  action: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <section className="dashboard-card">
      <div className="card-title">
        <span>
          {icon}
          <h2>{title}</h2>
        </span>
        <button onClick={onClick}>{action}</button>
      </div>
      {children}
    </section>
  );
}

function StatusRow({
  label,
  status,
  tone,
}: {
  label: string;
  status: string;
  tone: "green" | "orange";
}) {
  return (
    <div className="status-row">
      <b>{label}</b>
      <span className={tone}>{status}</span>
    </div>
  );
}
