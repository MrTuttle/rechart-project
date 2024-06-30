import React from "react";

type CardProps = {
  children?: React.ReactNode;
  title: string;
  description?: string;
};

export const CardSlotGeneric = ({
  children,
  title,
  description,
}: CardProps) => {
  return (
    <div className="flex items-center flex-col justify-center border  rounded-md border-slate-700 hover:border-slate-950 bg-slate-900 hover:bg-slate-950 pt-8 hover:pt-7 pb-0 hover:pb-1 transition-all">
      <div className="text-center px-4 text-slate-400 font-light mb-4 h-28">
        <h1 className="text-xl">{title}</h1>

        <h2>{description}</h2>
      </div>

      <div className="w-full  h-56 max-w-lg pt-8 rounded-md">{children}</div>
    </div>
  );
};
