import { useEffect } from "react";
import { Profile } from "../Profile/profile-info";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "../use-game-states";
import clsx from "clsx";

export function PlayerInfo({ player, isTimerRunning }) {
  const { seconds, setGameState, minutesString, secondsString } =
    useGameState();

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setGameState((lastGameState) => ({
          ...lastGameState,
          seconds: Math.max(lastGameState.seconds - 1, 0),
        }));
      }, 1000);

      return () => {
        clearInterval(interval);
        setGameState((lastGameState) => ({
          ...lastGameState,
          seconds: 60,
        }));
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerRunning]);

  const className = clsx(
    "grid grid-cols-2 m-4 relative",
    `text-${player.color}`,
  );
  const timerClassName = clsx(
    "text-xl",
    isDanger ? "text-red-600" : "text-slate-900",
  );

  return (
    <div className={className}>
      <Profile player={player} />
      <div className=" bg-slate-100 text-base absolute -top-2 -left-1 w-6 h-6 rounded-full shadow-lg text-center">
        <GameSymbol symbol={player.symbol} />
      </div>
      <div className="flex items-center gap-3 ml-10">
        <div className="h-6 w-px bg-slate-400" />
        <span className={timerClassName}>
          {minutesString}:{secondsString}
        </span>
      </div>
    </div>
  );
}
