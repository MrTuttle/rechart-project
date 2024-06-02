import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  data: {
    date: string;
    cashIn: number;
    cashOut: number;
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
      <AreaChart data={data} width={300} height={200}>
        <CartesianGrid
          strokeDasharray="4,4"
          stroke="#1e293b"
          vertical={false}
          strokeWidth="1"
        />
        <Area
          dataKey="cashIn"
          type="monotone"
          stroke="#06b6d4"
          fill={`url(#cyan-gradient)`} // call #id gradient defined in <LinearGradient/>
        />
        <Area
          dataKey="cashOut"
          type="monotone"
          stroke="#facc15"
          fill={`url(#yellow-gradient)`} // call #id gradient defined in <LinearGradient/>
        />
        <XAxis
          dataKey="date"
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
          dataKey="cashIn"
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
          cursor={{ radius: 4, stroke: "#334155" }}
          content={({ active, payload }) => {
            if (!active || !payload || payload.length === 0) {
              return null;
            }
            return (
              <div className="rounded border bg-slate-800 border-slate-700 px-2 py-1 shadow-sm backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-1">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-slate-500">
                      Date
                    </span>
                    <span className="text-xs uppercase text-slate-500">
                      {payload[0].payload.date
                        .split("-")
                        .reverse()
                        .slice(0, 2)
                        .join(" | ")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-slate-500">
                      CashIn
                    </span>
                    <span className="text-xs uppercase text-slate-300">
                      $
                      {Intl.NumberFormat("en-US").format(
                        payload[0].payload.cashIn
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-slate-500">
                      CashOut
                    </span>
                    <span className="text-xs uppercase text-slate-300">
                      $
                      {Intl.NumberFormat("en-US").format(
                        payload[0].payload.cashOut
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
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
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChartCurves;
