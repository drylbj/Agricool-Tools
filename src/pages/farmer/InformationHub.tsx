import { useMemo, useState } from "react";
import { Leaf, Search } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { articleData } from "../../data/mockData";

const filters = ["All", "Rice", "Vegetables", "Fruits", "Pests & Disease", "Fertilizer"];

export default function InformationHub() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const visibleArticles = useMemo(
    () =>
      articleData.filter(
        (article) =>
          (filter === "All" || article.category === filter) &&
          `${article.title} ${article.description}`
            .toLowerCase()
            .includes(search.toLowerCase()),
      ),
    [filter, search],
  );

  return (
    <div className="inner-page">
      <SectionHeading
        eyebrow="Learn something new"
        title="Information Hub"
        action={
          <div className="article-search">
            <Search size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles...."
            />
          </div>
        }
      />

      <div className="filter-row">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="article-grid">
        {visibleArticles.map((article) => (
          <article className="article-card" key={article.title}>
            <Leaf size={24} />
            <span>{article.category.toUpperCase()}</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button>
              Read article <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
