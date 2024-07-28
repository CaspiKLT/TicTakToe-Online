export function GameFieldGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-5 pl-px pt-px">
      {children}
    </div>
  );
}
