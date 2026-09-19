import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { assistantLogs } from "../../data/mockData";

export default function AssistantLogs() {
  const [flaggedOnly, setFlaggedOnly] = useState(false);

  const rows = assistantLogs.filter(
    (log) => !flaggedOnly || log.status === "Flagged",
  );

  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="AI Assistant Logs"
        subtitle="Monitor questions asked and flag answers needing review"
      />

      <div className="metric-row">
        <div className="metric">
          <span>Questions Today</span>
          <strong>147</strong>
        </div>
        <div className="metric">
          <span>Total This Month</span>
          <strong>3,891</strong>
        </div>
        <div className="metric">
          <span className="warn">Flagged for Review</span>
          <strong className="warn">6</strong>
        </div>
        <div className="metric">
          <span>Top Topic</span>
          <strong>Pest Control</strong>
        </div>
      </div>

      <div className="filter-bar">
        <select defaultValue="All Topics">
          <option>All Topics</option>
          <option>Pest Control</option>
          <option>Harvest Timing</option>
          <option>Irrigation</option>
        </select>
        <select
          value={flaggedOnly ? "Flagged Only" : "All"}
          onChange={(event) => setFlaggedOnly(event.target.value === "Flagged Only")}
        >
          <option value="All">All</option>
          <option value="Flagged Only">Flagged Only</option>
        </select>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Question</th>
              <th>Topic</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((log) => (
              <tr key={`${log.farmer}-${log.time}`}>
                <td className="bold">{log.farmer}</td>
                <td className="bold">{log.question}</td>
                <td className="bold">{log.topic}</td>
                <td className="bold">{log.time}</td>
                <td>
                  <StatusPill
                    label={log.status}
                    tone={log.status === "Answered" ? "green" : "red"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="alert-box wide muted-alert">
        <AlertTriangle size={20} />
        <p>
          Flagged questions may need expert review — the AI assistant only
          supports general guidance and is not a substitute for expert advice.
        </p>
      </div>
    </div>
  );
}
