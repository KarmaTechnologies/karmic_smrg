export default function InvoicesPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Invoices & Payment History</h1>
        <p className="dashboard-subtitle">
          View your invoices and payment records.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>No invoices yet.</p>
      </div>
    </section>
  );
}
