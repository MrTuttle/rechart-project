import "./App.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { AreaChartProps } from "recharts";
import CustomAreaChartCurves from "./components/CustomAreaChartCurves";
import CustomBarChart from "./components/CustomBarChart";
import CustomPieChart from "./components/CustomPieChart";

import {
  data,
  dataDescription,
  data2Description,
  data2,
  data3,
  data3bis,
  data4,
  data4bis,
  data5,
  data5bis,
} from "./datas/datas";

import { useState } from "react";
import CardSlot from "./components/CardSlot";
import { CardSlotGeneric } from "./components/CardSlotGeneric";

function App() {
  const styleBt =
    "px-2 py-1 border border-slate-600 text-xs hover:border-slate-400 cursor-pointer text-slate-600 hover:text-slate-400";
  const styleBtActive =
    "px-2 py-1 border border-slate-400 text-xs hover:border-slate-300 cursor-pointer text-slate-400 hover:text-slate-300";
  const [bt, setBt] = useState(false);
  const [btBar, setBtBar] = useState(false);
  const [btPie, setBtPie] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-950">
        <div id="grid" className="   bg-slate-900 overflow-hidden py-20">
          <div className="grid gap-4 px-4 max-w-screen-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto text-slate-600">
            <CardSlotGeneric
              title="Données 2021"
              description="Lorem ipsum dolores et sit amet"
            >
              {/* <CustomAreaChartCurves data={data} /> */}
              <CustomBarChart data={data3} />
            </CardSlotGeneric>
            <CardSlot
              dataDescription={dataDescription}
              data1={data}
              data2={data2}
              btTitle1="2023"
              btTitle2="2024"
            />
            <CardSlot dataDescription={dataDescription} data1={data} />
            <CardSlot
              dataDescription={data2Description}
              data1={data}
              data2={data2}
              btTitle1="data"
              btTitle2="data2"
            />

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light mb-4 h-28">
                <h1 className="text-xl">Données 20221</h1>
                <h2>
                  {!bt
                    ? "Forte reprise des bleus après la chute en milieu d'Année"
                    : "Après un début de saison difficile, les bleus se re-saisissent et reprennent le dessus"}
                </h2>
              </div>
              <div className="flex justify-end px-4 gap-2 w-full">
                <div
                  className={bt ? styleBt : styleBtActive}
                  onClick={() => {
                    setBt(!bt);
                  }}
                >
                  Data 1
                </div>
                <div
                  className={bt ? styleBtActive : styleBt}
                  onClick={() => {
                    setBt(!bt);
                  }}
                >
                  Data 2
                </div>
              </div>
              <div className="w-full  h-56 max-w-lg pt-8 rounded-md">
                <CustomAreaChartCurves data={!bt ? data : data2} />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light mb-4 h-28">
                <h1 className="text-xl">Données 2021</h1>
                <h2>
                  {!bt
                    ? "Forte reprise des bleus après la chute en milieu d'Année"
                    : "Après un début de saison difficile, les bleus se re-saisissent et reprennent le dessus"}
                </h2>
              </div>
              <div className="flex justify-end px-4 gap-2 w-full">
                <div
                  className={bt ? styleBt : styleBtActive}
                  onClick={() => {
                    setBt(!bt);
                  }}
                >
                  Data 1
                </div>
                <div
                  className={bt ? styleBtActive : styleBt}
                  onClick={() => {
                    setBt(!bt);
                  }}
                >
                  Data 2
                </div>
              </div>
              <div className="w-full  h-56 max-w-lg pt-8 rounded-md">
                <CustomAreaChartCurves data={!bt ? data : data2} />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light mb-4 h-28">
                <h1 className="text-xl">CustomBarChart</h1>
                <h2>
                  {!btBar
                    ? "Boutons a revoir pour une meilleure expérience utilisateur"
                    : "Il faut gérer un état inactif et un état actif pour les boutons"}
                </h2>
              </div>
              <div className="flex justify-end px-4 gap-2 w-full">
                <div
                  className={btBar ? styleBt : styleBtActive}
                  onClick={() => {
                    setBtBar(!btBar);
                  }}
                >
                  Data 1
                </div>
                <div
                  className={btBar ? styleBtActive : styleBt}
                  onClick={() => {
                    setBtBar(!btBar);
                  }}
                >
                  Data 2
                </div>
              </div>
              <div className="w-full  h-56 max-w-lg pt-8 rounded-md">
                <CustomBarChart data={!btBar ? data3 : data3bis} />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light mb-4 h-28">
                <h1 className="text-xl">CustomPieChart</h1>
                <h2>
                  {!btPie
                    ? "Premier set de datas pour le graphique circulaire, a passer dans le child component"
                    : "Second set de datas pour le graphique circulaire, les props passent bien dans le composant enfant. L'animation paraît plus lente que prévue, est-la forme qui donne cette impression ?."}
                </h2>
              </div>
              <div className="flex justify-end px-4 gap-2 w-full">
                <div
                  className={btPie ? styleBt : styleBtActive}
                  onClick={() => {
                    setBtPie(!btPie);
                  }}
                >
                  Data 1
                </div>
                <div
                  className={btPie ? styleBtActive : styleBt}
                  onClick={() => {
                    setBtPie(!btPie);
                  }}
                >
                  Data 2
                </div>
              </div>
              <div className="w-full  h-56 max-w-lg pt-8 rounded-md">
                {/* <CustomBarChart data={!btBar ? data3 : data3bis} /> */}
                <CustomPieChart
                  data4={!btPie ? data4 : data4bis}
                  data5={!btPie ? data5 : data5bis}
                />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2024</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <div className="w-full  h-56 max-w-lg border border-slate-950 pt-8 rounded-md">
                <CustomPieChart data4={data4} data5={data5} />
                {/* <ResponsiveContainer width="90%" height="90%">
                  <PieChart width={730} height={250}>
                    <Pie
                      data={data4}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={30}
                      fill="#facc15"
                    />
                    <Pie
                      data={data5}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      fill="#06b6d4"
                      startAngle={90}
                      endAngle={-180}
                      label
                      stroke="rgb(51 65 85)"
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
                  </PieChart>
                </ResponsiveContainer> */}
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2025</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <div className="w-full  h-56 max-w-lg border border-slate-950 pt-8 rounded-md">
                <CustomAreaChartCurves data={data} />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2026</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <div className="w-full  h-56 max-w-lg border border-slate-950 pt-8 rounded-md">
                <CustomAreaChartCurves data={data} />
              </div>
            </div>

            <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
              <div className="px-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2027</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <div className="w-full  h-56 max-w-lg border border-slate-950 pt-8 rounded-md">
                <CustomAreaChartCurves data={data} />
              </div>
            </div>
          </div>
        </div>

        <div id="grid" className="   bg-slate-900 h-screen overflow-hidden">
          <div className="flex items-center text-white flex-col justify-center gap-4">
            <div className="w-full h-60 max-w-lg border border-slate-700 p-2 py-8 m-2 rounded-md">
              <div className="p-4 mb-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2024</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <CustomAreaChartCurves data={data} />
            </div>

            <div className="w-full max-w-lg h-auto border border-slate-700 p-2 py-8 m-2 rounded-md">
              <div className="p-4 mb-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2024</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <CustomAreaChartCurves data={data} />
            </div>

            <div className="w-full max-w-lg h-60 border border-slate-700 p-2 py-8 m-2 rounded-md">
              <div className="p-4 mb-4 text-slate-400 font-light">
                <h1 className="text-xl">Données 2024</h1>
                <h2>
                  Forte reprise des bleus après la chute en milieu d'Année
                </h2>
              </div>
              <CustomAreaChartCurves data={data} />
            </div>

            <div className="border w-full">
              <div className="flex items-center text-white bg-slate-950 h-screen flex-col justify-center gap-4">
                <div className="w-full max-w-lg h-60 border border-slate-700 p-2 py-8 m-2 rounded-md">
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
                          return value
                            .split("-")
                            .reverse()
                            .slice(0, 2)
                            .join("/");
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
                        <linearGradient
                          id="cyan-gradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#06b6d4"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="74%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                        <linearGradient
                          id="yellow-gradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#facc15"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="74%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
