import { Header } from "../components/Header/header";
import {
  GameInfo,
  GameTitle,
  GameField,
  PlayerInfo,
} from "../components/Game/index";
import { player_1, player_2, player_3, player_4 } from "../components/constans";
import { useGameState } from "../components/use-game-states";

export default function HomePage() {
  const {
    cells,
    currentSymbol,
    NEXT_SYMBOL,
    handleCellClick,
    resetClick,
    seconds,
  } = useGameState();

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header player={player_1} />
      <main className="max-w-[616px] pt-6 flex flex-col mx-auto gap-10">
        <GameTitle playersAmount={4} timeForTurn={1} className={"ml-2"} />
        <GameInfo>
          <PlayerInfo
            player={player_1}
            isTimerRunning={player_1.symbol === currentSymbol}
          />
          <PlayerInfo
            player={player_2}
            isTimerRunning={player_2.symbol === currentSymbol}
          />
          <PlayerInfo
            player={player_3}
            isTimerRunning={player_3.symbol === currentSymbol}
          />
          <PlayerInfo
            player={player_4}
            isTimerRunning={player_4.symbol === currentSymbol}
          />
        </GameInfo>
        <GameField
          className={"bg-white mb-8 max-w-[616px] self-center"}
          current={currentSymbol}
          nextSymbol={NEXT_SYMBOL}
          reset={resetClick}
          click={handleCellClick}
          arr={cells}
          seconds={seconds}
        />
      </main>
    </div>
  );
}
