import { AlertTriangle } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { smsLogs } from "../../data/mockData";

export default function WeatherLogs() {
  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Weather & SMS Logs"
        subtitle="Alert delivery history and current risk zones"
      />

      <div className="metric-row">
        <div className="metric">
          <span>SMS Sent Today</span>
          <strong>8</strong>
        </div>
        <div className="metric">
          <span>Delivery Success Rate</span>
          <strong className="up">96.4%</strong>
        </div>
        <div className="metric">
          <span>Failed Deliveries</span>
          <strong className="warn">3</strong>
        </div>
        <div className="metric">
          <span>High-Risk Zones Active</span>
          <strong className="danger">2</strong>
        </div>
      </div>

      <div className="alert-box wide">
        <AlertTriangle size={20} />
        <p>
          Tanay, Rizal — Heavy rain warning active, 75% rain chance, 42 farmers
          notified
        </p>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Location</th>
              <th>Alert Type</th>
              <th>Recipients</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {smsLogs.map((log) => (
              <tr key={`${log.timestamp}-${log.alertType}`}>
                <td className="bold">{log.timestamp}</td>
                <td className="bold">{log.location}</td>
                <td className="bold">{log.alertType}</td>
                <td className="center bold">{log.recipients}</td>
                <td>
                  <StatusPill
                    label={log.delivery}
                    tone={log.delivery === "Delivered" ? "green" : "red"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
