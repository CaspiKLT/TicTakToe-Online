import { useState } from "react";
import { GAME_SYMBOLS } from "./constans";
import { getNextSymbol, getPrevSymbol, computeWinner } from "./Game/model";

export function useGameState() {
  const [{ cells, currentSymbol, seconds }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentSymbol: GAME_SYMBOLS.X,
    seconds: 60,
  }));

  const players = 2;
  const NEXT_SYMBOL = getNextSymbol(currentSymbol, players);
  const PREV_SYMBOL = getPrevSymbol(currentSymbol, players);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");
  const winner = computeWinner(cells, PREV_SYMBOL, 19, players + 1);
  console.log(winner);

  const handleCellClick = (i) => {
    if (winner) return;
    cells[i] ??
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentSymbol: NEXT_SYMBOL,
        cells: lastGameState.cells.map((cell, index) =>
          i === index && !cell ? lastGameState.currentSymbol : cell,
        ),
      }));
  };

  const resetClick = ({ cells, currentSymbol, seconds }) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      cells: new Array(19 * 19).fill(null),
      currentSymbol: GAME_SYMBOLS.X,
      seconds: 60,
    }));
  };

  return {
    setGameState,
    players,
    cells,
    currentSymbol,
    NEXT_SYMBOL,
    PREV_SYMBOL,
    handleCellClick,
    resetClick,
    seconds,
    minutesString,
    secondsString,
    winner,
  };
}
