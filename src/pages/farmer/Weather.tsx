import { Cloud, CloudRain, MessageSquare } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const temps = [25.3, 24.3, 28.3, 21.6, 29.5, 27.6, 24.3];
const rainChance = [77, 67, 80, 70, 87, 67, 67];

export default function Weather() {
  const [smsOn, setSmsOn] = useState(true);

  return (
    <div className="inner-page">
      <SectionHeading
        eyebrow="Jala-Jala, Rizal · Live weather · updated just now"
        title="Weather Today!"
        action={
          <span className="risk-pill">
            <CloudRain size={18} /> High risk&nbsp; 75% rain chance
          </span>
        }
      />

      <div className="weather-layout">
        <section className="temperature-card">
          <span>Current temp</span>
          <strong>23.9°C</strong>
          <b>Cloudy · Daytime</b>
          <Cloud size={112} strokeWidth={1.5} />
        </section>

        <div className="weather-stat-stack">
          <div className="weather-stat large">High / Low today</div>
          <div className="weather-stat">
            <CloudRain size={27} /> Rain chance <b>75%</b>
          </div>
          <div className="weather-stat">
            <CloudRain size={27} /> Precip type <b>Rain</b>
          </div>
          <button
            className="weather-stat toggle-row"
            onClick={() => setSmsOn(!smsOn)}
          >
            <MessageSquare size={27} /> SMS alerts
            <span className={smsOn ? "toggle on" : "toggle"} />
          </button>
        </div>
      </div>

      <section className="forecast panel">
        <div className="panel-heading">
          <h2>7-day forecast</h2>
          <b>SMS alert history</b>
        </div>
        <div className="forecast-row">
          {days.map((day, i) => (
            <div className="forecast-day" key={day}>
              <b>{day}</b>
              {i === 2 || i === 4 ? (
                <Cloud size={27} />
              ) : (
                <CloudRain size={27} />
              )}
              <strong>{temps[i]}°C</strong>
              <span>{rainChance[i]}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
