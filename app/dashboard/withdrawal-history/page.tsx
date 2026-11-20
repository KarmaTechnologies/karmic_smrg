export default function WithdrawalHistoryPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Withdrawal History</h1>
        <p className="dashboard-subtitle">
          View your past withdrawal requests and their status.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>No withdrawal history yet.</p>
      </div>
    </section>
  );
}
