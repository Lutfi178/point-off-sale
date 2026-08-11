import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCards from "./components/StatCards";
import SellingActivityChart from "./components/SellingActivityChart";
import LatestTransaction from "./components/LatestTransaction";
import PopularProduct from "./components/PopularProduct";
import StockReceipt from "./components/StockReceipt";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#EEF1F6" }}>
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content — takes remaining space after sidebar */}
      <div style={{ flex: 1, marginLeft: "260px", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Topbar */}
        <Topbar />

        {/* Page body */}
        <main style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <StatCards />
          <SellingActivityChart />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            <LatestTransaction />
            <PopularProduct />
            <StockReceipt />
          </div>
        </main>
      </div>
    </div>
  );
}
