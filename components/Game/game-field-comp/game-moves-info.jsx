import { GameSymbol } from "../game-symbol";
export function GameMovesInfo({ children, current, next }) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col">
        <div className="flex items-center text-xl font-semibold text-slate-900 text-center gap-1">
          Turn: <GameSymbol symbol={current} />
        </div>
        <div className="flex items-center text-xs font-thin text-slate-400 text-center">
          Next: <GameSymbol symbol={next} />
        </div>
      </div>
      {children}
    </div>
  );
}
