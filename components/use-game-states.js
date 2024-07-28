import { useState } from "react";
import { GAME_SYMBOLS, MOVES_ORDER } from "./constans";

function getNextSymbol(currentMove) {
  const nextSymbolIndex = MOVES_ORDER.indexOf(currentMove) + 1;
  return MOVES_ORDER[nextSymbolIndex] ?? MOVES_ORDER[0];
}

function computeWinner(cells, fieldsize = 19, lengthSize = 5){
  const gap = Math.floor(lengthSize / 2);

  function compareElements(indexs){
    let res = true;

    for(let i = 1; i < indexs.length; i++){
      res &&= !!cells[indexs[i]];
      res &&= cells[indexs[i]] === cells[indexs[i - 1]];
    }

    return res;
  }

  function getResults(i){
    const winnerConditions = [
      [], // -
      [], // |
      [], // /
      [] // \
    ]

    for(let j = 0; j < lengthSize; j++){
      winnerConditions[0].push(j - gap + i);
      winnerConditions[1].push(fieldsize * (j - gap) + i);
      winnerConditions[2].push(-fieldsize * (j - gap) + (j - gap) + i);
      winnerConditions[3].push(fieldsize * (j - gap) + (j - gap) + i);
    }

    return winnerConditions;
  }

    
    for (let i = 0; i < cells.length; i++){
      if (cells[i]) {
        const indexRows = getResults(i);
        const winnerIndexs = indexRows.find(row => compareElements(row));
        if(winnerIndexs) {
          return winnerIndexs;
        }
      }
    }
    return undefined;
}
export function useGameState() {
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

  const resetClick = ({ cells, currentSymbol, seconds }) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      cells: new Array(19 * 19).fill(null),
      currentSymbol: GAME_SYMBOLS.O,
      seconds: 60,
    }));
  };

  let winner = computeWinner(cells);
  console.log(winner);
  return {
    setGameState,
    cells,
    currentSymbol,
    NEXT_SYMBOL,
    handleCellClick,
    resetClick,
    seconds,
    minutesString,
    secondsString,
    winner,
  };
}
