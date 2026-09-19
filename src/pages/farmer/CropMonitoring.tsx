import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Metric from "../../components/Metric";
import { activityLogs, checklistTasks } from "../../data/mockData";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = [2023, 2024, 2025, 2026];

export default function CropMonitoring() {
  const [view, setView] = useState<"overview" | "logs">("overview");
  const [logFilter, setLogFilter] = useState<"Recent" | "Updated">("Recent");
  const [monthIndex, setMonthIndex] = useState(8);
  const [year, setYear] = useState(2025);
  const [checked, setChecked] = useState(
    checklistTasks.map((_, index) => index < 5),
  );

  const toggleTask = (index: number) => {
    setChecked((current) =>
      current.map((value, i) => (i === index ? !value : value)),
    );
  };

  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const highlightDays = monthIndex === 8 && year === 2025 ? [9, 13] : [];

  const shiftMonth = (delta: number) => {
    let nextIndex = monthIndex + delta;
    let nextYear = year;
    if (nextIndex < 0) {
      nextIndex = 11;
      nextYear -= 1;
    } else if (nextIndex > 11) {
      nextIndex = 0;
      nextYear += 1;
    }
    setMonthIndex(nextIndex);
    setYear(nextYear);
  };

  return (
    <div className="inner-page">
      <SectionHeading
        eyebrow="Farm activity"
        title="Crop Monitoring"
        action={
          <div className="heading-actions">
            {view === "logs" && (
              <button className="outline-button small">Filter</button>
            )}
            <button className="primary-button small">+ Add crop log</button>
          </div>
        }
      />

      <div className="metric-row">
        <Metric label="Active Crops" value="6" />
        <Metric label="Healthy Plots" value="5/6" />
        <Metric label="Needs Attention" value="1" tone="warn" />
        <Metric label="Next Harvest" value="12 days" />
      </div>

      <div className="tab-switch">
        <button
          className={view === "overview" ? "active" : ""}
          onClick={() => setView("overview")}
        >
          Overview
        </button>
        <button
          className={view === "logs" ? "active" : ""}
          onClick={() => setView("logs")}
        >
          Activity Logs
        </button>
      </div>

      {view === "overview" ? (
        <div className="monitor-grid">
          <section className="panel calendar-panel">
            <div className="panel-heading calendar-heading">
              <button className="icon-button" onClick={() => shiftMonth(-1)}>
                <ChevronLeft size={18} />
              </button>
              <span className="calendar-heading-title">
                <select
                  value={monthIndex}
                  onChange={(event) => setMonthIndex(Number(event.target.value))}
                >
                  {months.map((label, index) => (
                    <option value={index} key={label}>
                      {label}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(event) => setYear(Number(event.target.value))}
                >
                  {years.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </span>
              <button className="icon-button" onClick={() => shiftMonth(1)}>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="calendar-week">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="calendar-days">
              {Array.from({ length: firstWeekday }, (_, i) => (
                <span key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => (
                <button
                  key={i}
                  className={highlightDays.includes(i + 1) ? "today" : ""}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </section>

          <section className="panel plot-profile">
            <div className="panel-heading">
              <h2>Plot Profile</h2>
            </div>
            <p className="plot-name">Tomato — Plot D</p>
            <div className="plot-stats">
              <div className="plot-stat-box">
                <span>Plant health</span>
                <strong>Good</strong>
              </div>
              <div className="plot-stat-box">
                <span>Last watered</span>
                <strong>Today</strong>
              </div>
            </div>
            <div className="plot-stats">
              <div className="plot-stat-box">
                <span>Est. Harvest</span>
                <strong>Nov. 20-25</strong>
              </div>
            </div>
            <button className="outline-button full pill">full view</button>
          </section>
        </div>
      ) : (
        <div className="monitor-grid">
          <section className="panel activity-logs">
            <div className="panel-heading">
              <h2>Activity Logs</h2>
              <div className="pill-tabs">
                <button
                  className={logFilter === "Recent" ? "active" : ""}
                  onClick={() => setLogFilter("Recent")}
                >
                  Recent
                </button>
                <button
                  className={logFilter === "Updated" ? "active" : ""}
                  onClick={() => setLogFilter("Updated")}
                >
                  Updated
                </button>
              </div>
            </div>
            {activityLogs.map((entry) => (
              <div className="log-row" key={`${entry.crop}-${entry.plot}`}>
                <div className="log-row-top">
                  <b>
                    {entry.crop} — {entry.plot}
                  </b>
                  <span className={entry.tone}>{entry.status}</span>
                </div>
                <div className="log-actions">
                  <button className="outline-button small">Check</button>
                  <button className="ghost-button small">Cancel</button>
                </div>
              </div>
            ))}
          </section>

          <section className="panel checklist">
            <div className="panel-heading">
              <h2>Checked List</h2>
              <b>{checked.filter(Boolean).length}/10 done</b>
            </div>
            {checklistTasks.map((task, index) => (
              <button
                className="task-row"
                key={`${task}-${index}`}
                onClick={() => toggleTask(index)}
              >
                <span
                  className={
                    checked[index] ? "task-check checked" : "task-check"
                  }
                >
                  {checked[index] && <Check size={14} />}
                </span>
                {task}
              </button>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
