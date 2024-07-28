import clsx from "clsx";
import Image from "next/image";

export function Profile({ player }) {
  const className = clsx(
    "min-w-12 rounded-full shadow-md border border-dashed overflow-hidden",
    `border-${player.color}`,
  );
  return (
    <div className={"w-40 flex items-center gap-2"}>
      <div className={className}>
        <Image src={player.pfp} alt="pfp" width={48} height={48} />
      </div>
      <div className="flex flex-col items-start overflow-hidden">
        <div className="text-lg font-normal">{player.username ?? "User"}</div>
        <div className="text-sm text-slate-400 font-normal">
          Rating: {player.rating ?? 0}
        </div>
      </div>
    </div>
  );
}
