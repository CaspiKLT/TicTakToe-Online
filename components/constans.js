import pfpSrc from "../components/Profile/pfp's/pfp.png";

export const GAME_SYMBOLS = {
  X: "x",
  O: "o",
  Z: "z",
  H: "h",
};

export const MOVES_ORDER = [
  GAME_SYMBOLS.X,
  GAME_SYMBOLS.O,
  GAME_SYMBOLS.Z,
  GAME_SYMBOLS.H,
];

export const PLAYERS = [
  {
    username: "TamaKLT",
    rating: 100,
    pfp: pfpSrc,
    symbol: GAME_SYMBOLS.X,
    color: "orange-600",
  },
  {
    username: "TamaKLT",
    rating: 100,
    pfp: pfpSrc,
    symbol: GAME_SYMBOLS.O,
    color: "teal-600",
  },
  {
    username: "TamaKLT",
    rating: 100,
    pfp: pfpSrc,
    symbol: GAME_SYMBOLS.Z,
    color: "purple-600",
  },
  {
    username: "TamaKLT",
    rating: 100,
    pfp: pfpSrc,
    symbol: GAME_SYMBOLS.H,
    color: "blue-600",
  },
];
