import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Chart.css";

const data = [
  { name: "Enero", value: 30 },
  { name: "Febrero", value: 45 },
  { name: "Marzo", value: 54 },
  { name: "Abril", value: 65 },
  { name: "Mayo", value: 72 },
  { name: "Junio", value: 85 },
  { name: "Julio", value: 100 },
];

export function DashboardChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#3498db" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}