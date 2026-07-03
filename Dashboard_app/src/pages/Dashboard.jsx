import Card from "../components/Card";
import MainLayout from "../Layouts/MainLayout";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Dashboard() {
  const data = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
  ];

  return (
    <MainLayout>
      <div className="cards">
        <Card title="Users" value="350" />
        <Card title="Orders" value="120" />
        <Card title="Revenue" value="$4,500" />
        <Card title="Products" value="55" />
      </div>

      <h2>Monthly Sales</h2>

      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#3b82f6" />
      </BarChart>
    </MainLayout>
  );
}

export default Dashboard;
