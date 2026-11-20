import { getUser } from "@/lib/auth";

export default function ProfilePage() {
  const user = getUser();

  return (
    <section className="page-section">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Profile</h1>
        <p className="dashboard-subtitle">
          Manage your personal profile information.
        </p>
      </div>

      <div className="dashboard-form">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-input"
            defaultValue={user?.name || ""}
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-input"
            defaultValue={user?.email || ""}
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-label">Member ID</label>
          <input
            type="text"
            className="form-input"
            defaultValue={user?.id ? `SMRG-${String(user.id).padStart(6, "0")}` : ""}
            disabled
          />
        </div>
      </div>
    </section>
  );
}
