import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Box } from "@material-ui/core";



export default function Chart(props) {
  const { data } = props;
  return (
      <Box>
          <h2>Outward Code In Manchester Area vs Surgery Count Graph</h2>
    <BarChart
      width={2000}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="key" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
    </Box>
  );
}
