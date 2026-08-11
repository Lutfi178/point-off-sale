"use client";

const receipts = [
  { timestamp: "Today - 12:45", name: "Rhinotomy machine x250", event: "In" },
  { timestamp: "Today - 12:45", name: "Asus X541U", event: "Out" },
];

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "20px 24px",
  border: "1px solid #F3F4F6",
  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: "#9CA3AF",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  paddingBottom: 12,
  borderBottom: "1px solid #F3F4F6",
};

const tdStyle: React.CSSProperties = {
  padding: "14px 0",
  fontSize: 13,
  color: "#374151",
  fontWeight: 500,
  borderBottom: "1px solid #F9FAFB",
  verticalAlign: "middle",
};

export default function StockReceipt() {
  return (
    <div style={card}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Stock Receipt / Issued</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Timestamp</th>
            <th style={thStyle}>Item Name</th>
            <th style={thStyle}>Event</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((r, i) => (
            <tr key={i}>
              <td style={{ ...tdStyle, color: "#6B7280", fontWeight: 400 }}>{r.timestamp}</td>
              <td style={tdStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 6, backgroundColor: "#E5E7EB", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{r.name}</span>
                </div>
              </td>
              <td style={tdStyle}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: r.event === "In" ? "#FDE7E4" : "#EDE9FE",
                  color: r.event === "In" ? "#E4432A" : "#7C3AED",
                }}>
                  {r.event}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
