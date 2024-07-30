import { Header } from "../components/Header/header";
import { GameInfo, GameTitle, GameField } from "../components/Game/index";
import { useGameState } from "../components/use-game-states";
import { PLAYERS } from "../components/constans";

export default function HomePage() {
  const {
    players,
    cells,
    currentSymbol,
    NEXT_SYMBOL,
    PREV_SYMBOL,
    handleCellClick,
    resetClick,
    winner,
  } = useGameState();

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header player={PLAYERS[0]} />
      <main className="max-w-[616px] pt-6 flex flex-col mx-auto gap-10">
        <GameTitle playersAmount={players} timeForTurn={1} className={"ml-2"} />
        <GameInfo
          playersAmount={players}
          currentSymbol={currentSymbol}
          winnerSymbol={winner !== undefined ? PREV_SYMBOL : null}
        />
        <GameField
          className={"bg-white mb-8 max-w-[616px] self-center"}
          current={currentSymbol}
          nextSymbol={NEXT_SYMBOL}
          reset={resetClick}
          click={handleCellClick}
          arr={cells}
          winner={winner}
        />
      </main>
    </div>
  );
}
