import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import StatusPill from "../../components/StatusPill";
import { articleData } from "../../data/mockData";

export default function AdminInformationHub() {
  const [status, setStatus] = useState("All Status");

  const rows = articleData.filter(
    (article) => status === "All Status" || article.status === status,
  );

  return (
    <div className="inner-page admin-page">
      <SectionHeading
        title="Information Hub"
        subtitle="Manage farming articles and guides shown to users"
        action={<button className="primary-button">+ New Article</button>}
      />

      <div className="filter-bar">
        <select defaultValue="">
          <option value="" disabled>
            Filter
          </option>
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      <section className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Views</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((article) => (
              <tr key={article.title}>
                <td className="bold">{article.title}</td>
                <td className="bold">{article.category}</td>
                <td className="bold">{article.author}</td>
                <td className="bold">{article.views ?? "–"}</td>
                <td>
                  <StatusPill
                    label={article.status ?? "Draft"}
                    tone={article.status === "Published" ? "green" : "orange"}
                  />
                </td>
                <td>
                  <span className="link-button">Edit</span> ·{" "}
                  <span className="link-button">
                    {article.status === "Published" ? "Unpublish" : "Publish"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
