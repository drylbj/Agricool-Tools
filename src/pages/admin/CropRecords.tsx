import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { cropRecords, cropTypeCounts } from "../../data/mockData";

const healthTone: Record<string, "green" | "orange"> = {
  Healthy: "green",
  "Ready to Harvest": "green",
  "Check pests": "orange",
};

export default function CropRecords() {
  const [health, setHealth] = useState("All Health Status");

  const rows = cropRecords.filter(
    (record) => health === "All Health Status" || record.health === health,
  );

  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Crop Records"
        subtitle="System-wide activity across all registered farmers"
      />

      <div className="crop-count-row">
        {cropTypeCounts.map((item) => (
          <div className="crop-count-card" key={item.crop}>
            <span className="crop-emoji">{item.emoji}</span>
            <strong>{item.count}</strong>
            <span>{item.crop}</span>
          </div>
        ))}
      </div>

      <div className="filter-bar">
        <select defaultValue="">
          <option value="" disabled>
            Filter
          </option>
        </select>
        <select value={health} onChange={(event) => setHealth(event.target.value)}>
          <option>All Health Status</option>
          <option>Healthy</option>
          <option>Ready to Harvest</option>
          <option>Check pests</option>
        </select>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Crop/ Plot</th>
              <th>Stage</th>
              <th>Health</th>
              <th>Last Updated</th>
              <th>Est Harvest</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((record) => (
              <tr key={`${record.farmer}-${record.cropPlot}`}>
                <td className="bold">{record.farmer}</td>
                <td className="bold">{record.cropPlot}</td>
                <td className="bold">{record.stage}</td>
                <td>
                  <StatusPill label={record.health} tone={healthTone[record.health]} />
                </td>
                <td>{record.lastUpdated}</td>
                <td>{record.estHarvest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
