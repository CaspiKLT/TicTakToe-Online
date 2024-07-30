import { GameFieldLayout } from "./game-field-comp/game-field-layout";
import { GameMovesInfo } from "./game-field-comp/game-moves-info";
import { GameActions } from "./game-field-comp/game-actions";
import { UiButton } from "../uikit/ui-button";
import { GameFieldGrid } from "./game-field-comp/game-field-grid";
import { GameCell } from "./game-field-comp/game-cell";
import { GameSymbol } from "./game-symbol";

export function GameField({
  className,
  current,
  nextSymbol,
  reset,
  click,
  arr,
  winner,
}) {
  return (
    <GameFieldLayout className={className}>
      <GameMovesInfo current={current} next={nextSymbol}>
        <GameActions>
          <UiButton
            size="md"
            variant="primary"
            onClick={() => {
              {
                reset({ arr, current });
              }
            }}
          >
            Reset
          </UiButton>
          <UiButton size="md" variant="outline">
            Give up
          </UiButton>
        </GameActions>
      </GameMovesInfo>
      <GameFieldGrid>
        {arr.map((symbol, i) => (
          <GameCell
            key={i}
            onClick={() => {
              {
                click(i);
              }
            }}
            style={
              winner && [...winner.winnerIndexs].includes(i)
                ? "bg-yellow-400 hover:bg-yellow-200"
                : "bg-white"
            }
          >
            {symbol && <GameSymbol symbol={symbol} />}
          </GameCell>
        ))}
      </GameFieldGrid>
    </GameFieldLayout>
  );
}
