import { GraphWrapper } from "../styles/GraphWrapper";
import React from "react";
import {
//   AreaChart,
  ComposedChart,
//   Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export default function Graph({data}) {
  return (
    <GraphWrapper style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Area type="monotone" dataKey="salary" stroke="#8884d8" fill="#8884d8" /> */}
          <Bar dataKey="salary" barSize={40} fill="#bbb" />

        </ComposedChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
}

