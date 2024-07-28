import { XSymbol, OSymbol, ZSymbol, HSymbol } from "./icons/symbols/index";
import { GAME_SYMBOLS } from "../constans";

export function GameSymbol({ symbol }) {
  const Icon =
    {
      [GAME_SYMBOLS.X]: XSymbol,
      [GAME_SYMBOLS.O]: OSymbol,
      [GAME_SYMBOLS.Z]: ZSymbol,
      [GAME_SYMBOLS.H]: HSymbol,
    }[symbol] ?? XSymbol;

  return <Icon />;
}
