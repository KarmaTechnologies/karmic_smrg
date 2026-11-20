export default function NotificationsPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Notifications</h1>
        <p className="dashboard-subtitle">
          View your account notifications and updates.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>No new notifications.</p>
      </div>
    </section>
  );
}
