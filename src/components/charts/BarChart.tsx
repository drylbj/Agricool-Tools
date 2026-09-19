export default function BarChart({
  data,
}: {
  data: { label: string; value: number; highlight?: boolean }[];
}) {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="bar-chart">
      {data.map((item) => {
        const heightPct = Math.max(8, (item.value / max) * 100);
        return (
          <div className="bar-chart-column" key={item.label}>
            <div className="bar-chart-track">
              <div
                className={item.highlight ? "bar-chart-bar peak" : "bar-chart-bar"}
                style={{ height: `${heightPct}%` }}
              />
            </div>
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
