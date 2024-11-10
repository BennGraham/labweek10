export default function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h4>{title || ""}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}
