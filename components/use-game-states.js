import { useEffect, useState } from "react";
import { GAME_SYMBOLS, MOVES_ORDER } from "./constans";

function getNextSymbol(currentMove) {
  const nextSymbolIndex = MOVES_ORDER.indexOf(currentMove) + 1;
  return MOVES_ORDER[nextSymbolIndex] ?? MOVES_ORDER[0];
}
export function useGameState() {
  // const [seconds, setSeconds] = useState(60);

  const [{ cells, currentSymbol, seconds }, setGameState] = useState(() => ({
  cells: new Array(19 * 19).fill(null),
  currentSymbol: GAME_SYMBOLS.O,
  seconds: 60,
  }));

  const NEXT_SYMBOL = getNextSymbol(currentSymbol);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const handleCellClick = (i) => {
    cells[i] ??
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentSymbol: getNextSymbol(lastGameState.currentSymbol),
        cells: lastGameState.cells.map((cell, index) =>
          i === index && !cell ? lastGameState.currentSymbol : cell,
        ),
      }));
  };

  const resetClick = ({cells, currentSymbol, seconds}) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      cells: new Array(19 * 19).fill(null),
      currentSymbol: GAME_SYMBOLS.O,
      seconds: 60,
    }));
  };

  return {
    setGameState,
    cells,
    currentSymbol,
    NEXT_SYMBOL,
    handleCellClick,
    resetClick,
    seconds,
    minutesString,
    secondsString
  };
}
