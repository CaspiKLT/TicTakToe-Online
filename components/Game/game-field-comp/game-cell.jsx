import clsx from "clsx";

export function GameCell({ children, onClick, style }) {
  const className = clsx(
    style,
    "border border-slate-200 text-4xl font-bold flex items-center justify-center -ml-px -mt-px transition-colors hover:bg-slate-200",
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
