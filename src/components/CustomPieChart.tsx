import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type Data = {
  data4: {
    name: string;
    value: number;
  }[];
  data5: {
    name: string;
    value: number;
  }[];
};
// data: {
//   date: string;
//   cashIn: number;
//   cashOut: number;
// }
// [];

const CustomPieChart = ({ data4, data5 }: Data) => {
  const colorsCyan = [
    "#083344",
    "#164e63",
    "#155e75",
    "rgba(36, 211, 238, 1)",
    "#0891b2",
    "#06b6d4",
    "#22d3ee",
    "#67e8f9",
    "#a5f3fc",
    "#cffafe",
    "#ecfeff",
  ];
  const colorsYellow = [
    "rgba(250, 204, 20, 1)",
    "rgba(250, 204, 20, 0.8)",
    "rgba(250, 204, 20, 0.6)",
    "rgba(250, 204, 20, 0.4)",
    "rgba(250, 204, 20, 0.2)",
    "rgba(250, 204, 20, 0)",
    "rgba(250, 204, 20, 0)",
  ];
  return (
    <ResponsiveContainer width="90%" height="90%">
      <PieChart width={730} height={250}>
        <Pie
          data={data4}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          stroke="rgba(51 65 85 0.5)"
          innerRadius={30}
          outerRadius={40}
          fill="#facc15"
        >
          {data5.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorsYellow[index]} />
          ))}
        </Pie>
        <Pie
          data={data5}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={60}
          fill="#06b6d4"
          startAngle={90}
          endAngle={-180}
          // label
          stroke="rgba(51 65 85 0)"
          strokeWidth={3}
        >
          {data5.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorsCyan[index]} />
          ))}
        </Pie>

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
                      <span>Team</span>
                      <span className="text-slate-300">
                        {payload[0].payload.name}
                      </span>
                    </p>
                    <p className="inline-flex space-x-2">
                      <span>Weight</span>
                      <span className="text-slate-300">
                        {payload[0].payload.value} t
                      </span>
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
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
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
