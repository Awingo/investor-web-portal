import { LineChart, Line, ResponsiveContainer } from "recharts";
import React from "react";

import "./dashboard-chart.css";

const DashboardChart = ({ data }) => {
  return (
    <div className="dashboard-chart">
      <div>Profit chart</div>
      <ResponsiveContainer height={100}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="x"
            dot={false}
            className="dashboard-chart__line"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
