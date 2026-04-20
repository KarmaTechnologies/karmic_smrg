import { ReactNode } from "react";

type ModalProps = {
  title: string;
  children: ReactNode;
  open?: boolean;
};

export default function Modal({ title, children, open = false }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "grid",
        placeItems: "center",
        zIndex: 100,
      }}
    >
      <div className="card" style={{ width: "min(560px, 92vw)", padding: "1.25rem" }}>
        <h3>{title}</h3>
        <div style={{ marginTop: "0.8rem" }}>{children}</div>
      </div>
    </div>
  );
}
