export default function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", color: "var(--muted)" }}>
      <span
        style={{
          width: "14px",
          height: "14px",
          border: "2px solid var(--border)",
          borderTopColor: "var(--primary)",
          borderRadius: "999px",
          display: "inline-block",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <span>{label}</span>
      <style>{"@keyframes spin { to { transform: rotate(360deg); } }"}</style>
    </div>
  );
}
