import DashboardCard from "@/components/dashboard/DashboardCard";

export default function DashboardOverviewPage() {
  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">
          Welcome back to your SMRG author dashboard. Manage your profile,
          contributions, and account settings from the sidebar.
        </p>
      </div>

      <div className="dashboard-grid">
        <DashboardCard title="Total Contributions" value="0" />
        <DashboardCard title="Pending Submissions" value="0" />
        <DashboardCard title="Published Articles" value="0" />
        <DashboardCard title="Wallet Balance" value="$0.00" />
      </div>
    </section>
  );
}
