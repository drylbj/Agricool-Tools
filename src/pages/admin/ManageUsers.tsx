import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { farmerRecords } from "../../data/mockData";

const locations = ["All Location", "Jala-Jala, Rizal", "Baras, Rizal", "Tanay, Rizal"];

const toneFor: Record<string, "green" | "orange" | "red"> = {
  Active: "green",
  Pending: "orange",
  Suspended: "red",
};

const actionFor: Record<string, string> = {
  Active: "Edit",
  Pending: "Approved",
  Suspended: "Reinstate",
};

export default function ManageUsers() {
  const [location, setLocation] = useState("All Location");

  const rows = farmerRecords.filter(
    (farmer) => location === "All Location" || farmer.location === location,
  );

  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Manage Users"
        subtitle="View and manage all registered farmer accounts"
        action={<button className="primary-button">+ Add User</button>}
      />

      <div className="filter-bar">
        <select defaultValue="">
          <option value="" disabled>
            Filter
          </option>
        </select>
        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Crops</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((farmer) => (
              <tr key={farmer.name}>
                <td className="bold">{farmer.name}</td>
                <td className="bold">{farmer.contact}</td>
                <td className="bold">{farmer.location}</td>
                <td className="bold">{farmer.crops}</td>
                <td className="bold">{farmer.joined}</td>
                <td>
                  <StatusPill label={farmer.status} tone={toneFor[farmer.status]} />
                </td>
                <td>
                  <span className="link-button">{actionFor[farmer.status]}</span>{" "}
                  ·{" "}
                  <span className="link-button">View</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="table-footer">
        <span>Showing {rows.length} of 248 users</span>
        <div className="pagination">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
