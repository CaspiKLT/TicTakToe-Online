import clsx from "clsx";

export function GameFieldLayout({ children, className }) {
  return (
    <div className={clsx(className, "w-full p-5 rounded-2xl shadow-md")}>
      {children}
    </div>
  );
}
