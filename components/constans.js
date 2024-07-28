import pfpSrc from "../components/Profile/pfp's/pfp.png";
import pfpSrc_2 from "../components/Profile/pfp's/pfp2.jpg";

export const GAME_SYMBOLS = {
  X: "x",
  O: "o",
  Z: "z",
  H: "h",
};

export const MOVES_ORDER = [
  GAME_SYMBOLS.O,
  GAME_SYMBOLS.X,
  GAME_SYMBOLS.Z,
  GAME_SYMBOLS.H,
];

export const player_1 = {
  username: "TamaKLT",
  rating: 100,
  pfp: pfpSrc,
  symbol: GAME_SYMBOLS.O,
  color: "teal-600",
};
export const player_2 = {
  username: "Gennadiy",
  rating: 100,
  pfp: pfpSrc_2,
  symbol: GAME_SYMBOLS.X,
  color: "orange-600",
};
export const player_3 = {
  username: "SvetLANA",
  rating: 100,
  pfp: pfpSrc,
  symbol: GAME_SYMBOLS.Z,
  color: "purple-600",
};
export const player_4 = {
  username: "Anatoliy",
  rating: 100,
  pfp: pfpSrc_2,
  symbol: GAME_SYMBOLS.H,
  color: "blue-600",
};
