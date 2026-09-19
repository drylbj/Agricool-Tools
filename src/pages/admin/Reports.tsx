import SectionHeading from "../../components/SectionHeading";
import BarChart from "../../components/charts/BarChart";
import { cropDistribution, registrationsOverTime, reportsTable } from "../../data/mockData";

export default function Reports() {
  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Reports"
        subtitle="System usage summaries and exportable data"
        action={
          <div className="heading-actions">
            <select defaultValue="Last 30 days">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <button className="primary-button">Export CSV</button>
          </div>
        }
      />

      <div className="reports-grid">
        <section className="panel">
          <h2 className="panel-title">Farmer Registrations Over Time</h2>
          <BarChart data={registrationsOverTime} />
        </section>

        <section className="panel">
          <h2 className="panel-title">Crop Type Distribution</h2>
          <div className="progress-list">
            {cropDistribution.map((item) => (
              <div className="progress-row" key={item.crop}>
                <div className="progress-row-label">
                  <span>{item.crop}</span>
                  <b>{item.count}</b>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${(item.count / item.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Report</th>
              <th>Period</th>
              <th>Generated</th>
              <th>Format</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportsTable.map((row) => (
              <tr key={row.report}>
                <td className="bold">{row.report}</td>
                <td className="bold">{row.period}</td>
                <td className="bold">{row.generated}</td>
                <td className="bold">{row.format}</td>
                <td>
                  <span className="link-button">Download</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
