import { AlertTriangle } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { articleData, farmerRecords } from "../../data/mockData";

export default function AdminOverview() {
  const recentFarmers = farmerRecords.slice(0, 4);
  const articles = articleData.slice(0, 4);

  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Admin Overview"
        subtitle="System-wide activity across all registered farmers"
      />

      <div className="metric-row admin-metric-row">
        <div className="metric">
          <span>Total Farmers</span>
          <strong>248</strong>
          <em className="up">+12 this month</em>
        </div>
        <div className="metric">
          <span>Active Crop Logs</span>
          <strong>563</strong>
          <em className="up">+34 this week</em>
        </div>
        <div className="metric">
          <span>SMS Alerts Sent</span>
          <strong>1,204</strong>
          <em>Last 30 days</em>
        </div>
        <div className="metric">
          <span>AI Questions Asked</span>
          <strong>2,814</strong>
          <em>Last 30 days</em>
        </div>
        <div className="metric warn-card">
          <span className="warn">Pending Reports</span>
          <strong className="warn">5</strong>
          <em>Needs review</em>
        </div>
      </div>

      <div className="admin-overview-grid">
        <section className="panel">
          <div className="panel-heading">
            <h2>Recently Registered Farmers</h2>
            <a className="link-button" href="/admin/users">
              View all
            </a>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Crops</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentFarmers.map((farmer) => (
                <tr key={farmer.name}>
                  <td className="bold">{farmer.name}</td>
                  <td>{farmer.location}</td>
                  <td className="bold">{farmer.crops}</td>
                  <td>
                    <StatusPill
                      label={farmer.status}
                      tone={
                        farmer.status === "Active"
                          ? "green"
                          : farmer.status === "Pending"
                            ? "orange"
                            : "red"
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="admin-side-column">
          <section className="panel">
            <div className="panel-heading">
              <h2>Information Hub Articles</h2>
              <a className="link-button" href="/admin/information-hub">
                + Add New
              </a>
            </div>
            <ul className="simple-list">
              {articles.map((article) => (
                <li key={article.title}>
                  <span>{article.title}</span>
                  <em className={article.status === "Draft" ? "warn" : "muted"}>
                    {article.status}
                  </em>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2 className="panel-title">System Alerts</h2>
            <div className="alert-box">
              <AlertTriangle size={20} />
              <p>3 farmers reported missing SMS alerts in Tanay area</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
