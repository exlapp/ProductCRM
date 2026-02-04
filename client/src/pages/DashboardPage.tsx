export const DashboardPage = () => {
  return (
    <section>
      <header className="page-header">
        <h2>Operational Dashboard</h2>
        <p>Key metrics for lead volume, average deal size, and activity.</p>
      </header>
      <div className="metrics-grid">
        <article className="metric-card">
          <h3>Lead Volume</h3>
          <p className="metric-value">0</p>
          <span className="metric-meta">за текущий период</span>
        </article>
        <article className="metric-card">
          <h3>Average Deal Size</h3>
          <p className="metric-value">₽0</p>
          <span className="metric-meta">по закрытым сделкам</span>
        </article>
        <article className="metric-card">
          <h3>Interactions</h3>
          <p className="metric-value">0</p>
          <span className="metric-meta">за текущий период</span>
        </article>
      </div>
    </section>
  );
};
