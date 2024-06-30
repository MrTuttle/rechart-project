import React, { useState } from "react";
import CustomAreaChartCurves from "./CustomAreaChartCurves";

// should take in data1 and data2, and render a card with a chart that can switch between the two data sets

type CardSlotProps = {
  children?: React.ReactNode;
  dataDescription: {
    title: string;
    description1?: string;
    description2?: string;
  };

  data1: Data;
  data2?: Data;
  btTitle1?: string;
  btTitle2?: string;
};
type Data = {
  date: string;
  cashIn: number;
  cashOut: number;
}[];
type ButtonProps = CardSlotProps;

const CardSlot = ({
  dataDescription,
  data1,
  data2,
  btTitle1,
  btTitle2,
}: ButtonProps) => {
  const styleBt =
    "px-2 py-1 border border-slate-600 text-xs hover:border-slate-400 cursor-pointer text-slate-600 hover:text-slate-400";
  const styleBtActive =
    "px-2 py-1 border border-slate-400 text-xs hover:border-slate-300 cursor-pointer text-slate-400 hover:text-slate-300";
  const [bt, setBt] = useState(false);
  const buttons = () => {
    return (
      <>
        <div
          className={bt ? styleBt : styleBtActive}
          onClick={() => {
            setBt(!bt);
          }}
        >
          {btTitle1}
        </div>
        <div
          className={bt ? styleBtActive : styleBt}
          onClick={() => {
            setBt(!bt);
          }}
        >
          {btTitle2}
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
      <div className="px-4 text-slate-400 font-light mb-4 h-28">
        <h1 className="text-xl">{dataDescription.title}</h1>

        <h2>
          {!bt ? dataDescription.description1 : dataDescription.description2}
        </h2>
      </div>
      <div className="flex justify-end px-4 gap-2 w-full">
        {data2 ? buttons() : null}
      </div>
      <div className="w-full  h-56 max-w-lg pt-8 rounded-md">
        {data2 ? (
          <CustomAreaChartCurves data={!bt ? data1 : data2} />
        ) : (
          <CustomAreaChartCurves data={data1} />
        )}
      </div>
    </div>
  );
};

export default CardSlot;
