import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import moment from "moment";
import React from "react";

import "./wallet-chart.css";

const WalletChart = ({ data }) => {
  const data1 = data.map(x => ({
    amount: x.amount,
    date: moment(x.date).format("MMMM Do HH:mm")
  }));
  return (
    <LineChart width={500} height={100} data={data1} className="wallet-chart">
      <XAxis dataKey="date" type="category" axisLine={false} interval={7} />
      <YAxis dataKey="amount" axisLine={false} tickCount={2} />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#03bdaf" dot={false} />
    </LineChart>
  );
};

export default WalletChart;
