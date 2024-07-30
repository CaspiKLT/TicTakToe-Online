import { PLAYERS } from "../constans";
import { PlayerInfo } from "./player-info";

export function GameInfo({ playersAmount, currentSymbol, winnerSymbol }) {
  return (
    <div className="w-[616px] p-5 grid grid-cols-2 items-center justify-between rounded-2xl shadow-md bg-white">
      {PLAYERS.map((el, i) =>
        i < playersAmount ? (
          <PlayerInfo
            player={el}
            isTimerRunning={el.symbol === currentSymbol}
            isWinner={winnerSymbol}
            key={i}
          />
        ) : (
          <></>
        ),
      )}
    </div>
  );
}
