"use client";

const transactions = [
  { id: "T21.0331", timestamp: "Today - 12:45", amount: "$50,000", status: "Succeed" },
  { id: "T21.0331", timestamp: "Today - 12:31", amount: "$150,000", status: "Succeed" },
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
  padding: "16px 0",
  fontSize: 13,
  color: "#374151",
  fontWeight: 500,
  borderBottom: "1px solid #F9FAFB",
  verticalAlign: "middle",
};

export default function LatestTransaction() {
  return (
    <div style={card}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Latest Transaction</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Transaction ID</th>
            <th style={thStyle}>Timestamp</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr key={i}>
              <td style={tdStyle}>{tx.id}</td>
              <td style={{ ...tdStyle, color: "#6B7280", fontWeight: 400 }}>{tx.timestamp}</td>
              <td style={tdStyle}>{tx.amount}</td>
              <td style={{ ...tdStyle }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: "#FDE7E4",
                  color: "#E4432A",
                }}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
