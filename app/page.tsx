import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCards from "./components/StatCards";
import SellingActivityChart from "./components/SellingActivityChart";
import LatestTransaction from "./components/LatestTransaction";
import PopularProduct from "./components/PopularProduct";
import StockReceipt from "./components/StockReceipt";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EEF1F6]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[288px] flex-1 flex flex-col min-h-screen overflow-auto">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="flex-1 p-6 space-y-5">
          {/* Stat Cards */}
          <StatCards />

          {/* Selling Activity Chart */}
          <SellingActivityChart />

          {/* Bottom Tables */}
          <div className="grid grid-cols-3 gap-5">
            <LatestTransaction />
            <PopularProduct />
            <StockReceipt />
          </div>
        </main>
      </div>
    </div>
  );
}
