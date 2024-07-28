import Link from "next/link";
import { ArrowLeft } from "./icons/arrow-left-icon";
import { Star } from "./icons/star-icon";
import { Players } from "./icons/players-icon";
import { Timer } from "./icons/timer-icon";
import clsx from "clsx";

export function GameTitle({ playersAmount, timeForTurn, className }) {
  const style = clsx(
    "w-[304px] h-[72px] flex flex-col justify-between items-start",
    className,
  );
  return (
    <div className={style}>
      <Link
        href="#"
        className="flex gap-1 items-center transition-colors text-teal-600 hover:text-teal-500"
      >
        <ArrowLeft />
        <span className="text-xs ">To Home Page</span>
      </Link>

      <h1 className="text-4xl">Tic-Tak-Toe</h1>

      <div className="w-full items-center justify-start flex gap-3 transition-colors text-slate-400 hover:text-slate-300">
        <Star />
        <span className="text-xs flex items-center  gap-1">
          <Players />
          {playersAmount ?? 0}
        </span>
        <span className="text-xs flex items-center gap-1">
          <Timer />
          {timeForTurn ?? 1} min for turn
        </span>
      </div>
    </div>
  );
}
