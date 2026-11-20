export default function WalletPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Wallet</h1>
        <p className="dashboard-subtitle">
          View your wallet balance and payment information.
        </p>
      </div>

      <div className="dashboard-empty">
        <p>Your wallet balance is $0.00.</p>
      </div>
    </section>
  );
}
