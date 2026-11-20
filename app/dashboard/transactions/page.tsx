export default function TransactionsPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Transactions</h1>
        <p className="dashboard-subtitle">
          View your payment and withdrawal transaction history.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>No transactions yet.</p>
      </div>
    </section>
  );
}
