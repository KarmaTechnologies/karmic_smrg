export default function MyContributionsPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">My Contributions</h1>
        <p className="dashboard-subtitle">
          View and manage your submitted articles, videos, and other content.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>No contributions yet.</p>
      </div>
    </section>
  );
}
