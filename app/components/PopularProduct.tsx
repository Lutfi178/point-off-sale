"use client";

const products = [
  { id: "PZ.31547", name: "Rhinotomy machine x250", stock: 14 },
  { id: "PZ.31721", name: "Laptop Asus x249", stock: 14 },
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

export default function PopularProduct() {
  return (
    <div style={card}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Popular Product</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Product ID</th>
            <th style={thStyle}>Item Name</th>
            <th style={thStyle}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td style={tdStyle}>{p.id}</td>
              <td style={tdStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 6, backgroundColor: "#E5E7EB", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{p.name}</span>
                </div>
              </td>
              <td style={{ ...tdStyle, fontWeight: 700 }}>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
