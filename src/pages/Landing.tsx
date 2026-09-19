import { useNavigate } from "react-router-dom";
import { BookOpen, Cloud, Leaf, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Crop Monitoring",
    description:
      "Log growth stages, plant health, and field activities so you never lose track of your crops.",
  },
  {
    icon: Cloud,
    title: "Weather & SMS Alerts",
    description:
      "Get real-time local weather and automatic SMS warnings before bad weather hits.",
  },
  {
    icon: MessageSquare,
    title: "AI Farm Assistant",
    description:
      "Ask farming questions in Filipino and get quick, simple answers anytime.",
  },
  {
    icon: BookOpen,
    title: "Information Hub",
    description:
      "Search farming guides on pests, fertilizer, and harvest timing whenever you need them.",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  const goToAuth = (tab: "login" | "register") => {
    navigate(`/auth?tab=${tab}`);
  };

  return (
    <main className="landing">
      <header className="landing-header">
        <div className="landing-brand">
          <Leaf size={24} />
          <span>AgriCool-Tools</span>
        </div>
        <nav className="landing-nav">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>
        <div className="landing-auth-actions">
          <button className="text-button dark" onClick={() => goToAuth("login")}>
            Login
          </button>
          <button
            className="primary-button small"
            onClick={() => goToAuth("register")}
          >
            Sign Up
          </button>
        </div>
      </header>

      <section className="landing-hero">
        <div className="landing-copy">
          <span className="hero-badge">For small-scale Filipino farmers</span>
          <h1>Smart farming made simple for every Filipino farmer</h1>
          <p className="landing-description">
            Track your crops, get weather alerts, and ask farming questions —
            all in one easy app. No more lost notebooks or guesswork.
          </p>
          <div className="landing-buttons">
            <button
              className="primary-button"
              onClick={() => goToAuth("register")}
            >
              Get Started Free <span>→</span>
            </button>
            <a className="outline-button" href="#how-it-works">
              See How It Works
            </a>
          </div>
        </div>
        <div className="landing-visual" aria-hidden="true" />
      </section>

      <section className="landing-features" id="features">
        <div className="landing-features-heading">
          <h2>Everything your farm needs, in one place</h2>
          <p>Built from real interviews with farmers local farming communities</p>
        </div>
        <div className="feature-grid" id="how-it-works">
          {features.map(({ icon: Icon, title, description }) => (
            <div className="feature-card" key={title}>
              <Icon size={26} />
              <b>{title}</b>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-cta" id="about">
        <h2>Ready to grow smarter?</h2>
        <p>Join farmers already using AgriCool-Tools to manage their farms.</p>
        <button
          className="outline-button on-dark"
          onClick={() => goToAuth("register")}
        >
          Get Started Free <span>→</span>
        </button>
      </section>
    </main>
  );
}
