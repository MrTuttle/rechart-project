import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  data: {
    name: string;
    uv: number;
    pv: number;
  }[];
};
// data: {
//   date: string;
//   cashIn: number;
//   cashOut: number;
// }
// [];

const CustomAreaChartCurves = ({ data }: Data) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart data={data} width={300} height={200}>
        <CartesianGrid
          strokeDasharray="4,4"
          stroke="#1e293b"
          vertical={false}
          strokeWidth="1"
        />
        <XAxis
          dataKey="name"
          fontSize={10}
          stroke="#334155"
          axisLine={false}
          tickLine={false}
          interval={3}
          // tickFormatter={(value: string) =>
          //   new Date(value).toLocaleDateString("fr-FR", {
          //     dateStyle: "medium",
          //   })
          // }
          tickFormatter={(value: string) => {
            // format like 20/04
            return value.split("-").reverse().slice(0, 2).join("/");
          }}
        />
        <YAxis
          // dataKey="cashIn"
          fontSize={10}
          stroke="#334155"
          axisLine={false}
          tickLine={false}
          interval={1}
          tickFormatter={(value) =>
            `$${Intl.NumberFormat("en-US").format(value)}`
          }
        />
        <Tooltip
          // cursor={{ radius: 4, stroke: "#334155", fill: "#000000" }}
          cursor={false}
          contentStyle={{
            backgroundColor: "rgb(30, 41, 59)",
            borderColor: "rgb(51, 65, 85)",
            color: "rgb(100, 116, 139)",
            borderRadius: "0.3rem",
          }}
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="text-xs text-slate-500 rounded border bg-slate-800 border-slate-700 p-2 shadow-sm backdrop-blur-xl">
                  <div className=" uppercase">{label}</div>
                  <div className="inline-flex space-x-8">
                    <p className="inline-flex space-x-2">
                      <span>pv</span>
                      <span className="text-slate-300">
                        {payload[0].payload.pv}
                      </span>
                    </p>
                    <p className="inline-flex space-x-2">
                      <span>uv</span>
                      <span className="text-slate-300">
                        {payload[0].payload.uv}
                      </span>
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />

        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="pv" fill={`url(#cyan-gradient)`} />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        <Bar dataKey="uv" fill={`url(#yellow-gradient)`} />
        <defs>
          <linearGradient id="cyan-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.4} />
            <stop offset="74%" stopColor="#8b5cf6" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="yellow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#facc15" stopOpacity={0.4} />
            <stop offset="74%" stopColor="#8b5cf6" stopOpacity={0.05} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChartCurves;
