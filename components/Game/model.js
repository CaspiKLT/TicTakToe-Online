import { MOVES_ORDER } from "../constans";

export function getNextSymbol(currentMove, amount) {
  const currentOrder = MOVES_ORDER.slice(0, amount);
  const nextSymbolIndex = currentOrder.indexOf(currentMove) + 1;
  return currentOrder[nextSymbolIndex] ?? currentOrder[0];
}

export function getPrevSymbol(currentMove, amount) {
  const currentOrder = MOVES_ORDER.slice(0, amount);
  let prevSymbolIndex;
  if (amount === 2) {
    prevSymbolIndex = currentOrder.indexOf(currentMove) === 0 ? 1 : 0;
  } else {
    prevSymbolIndex = currentOrder.indexOf(currentMove) === 0 ? currentOrder.length - 1 : currentOrder.indexOf(currentMove) - 1;
  }
  return currentOrder[prevSymbolIndex] ?? currentOrder[0];
}

export function computeWinner(
  cells,
  winnerMove,
  fieldsize = 19,
  lengthSize = 5,
) {
  const gap = Math.floor(lengthSize / 2);

  function compareElements(indexs) {
    let res = true;

    for (let i = 1; i < indexs.length; i++) {
      res &&= !!cells[indexs[i]];
      res &&= cells[indexs[i]] === cells[indexs[i - 1]];
    }

    return res;
  }

  function getResults(i) {
    const winnerConditions = [
      [], // -
      [], // |
      [], // /
      [], // \
    ];

    for (let j = 0; j < lengthSize; j++) {
      winnerConditions[0].push(j - gap + i);
      winnerConditions[1].push(fieldsize * (j - gap) + i);
      winnerConditions[2].push(-fieldsize * (j - gap) + (j - gap) + i);
      winnerConditions[3].push(fieldsize * (j - gap) + (j - gap) + i);
    }

    return winnerConditions;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getResults(i);
      const winnerIndexs = indexRows.find((row) => compareElements(row));
      if (winnerIndexs) {
        return { winnerIndexs, winnerMove };
      }
    }
  }
  return undefined;
}
