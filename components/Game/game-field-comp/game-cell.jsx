export function GameCell({ children, onClick }) {
  return (
    <button
      className="border border-slate-200 text-4xl font-bold flex items-center justify-center -ml-px -mt-px transition-colors hover:bg-slate-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
