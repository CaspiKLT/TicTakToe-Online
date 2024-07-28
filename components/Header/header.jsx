import Image from "next/image";
import logoSrc from "./media/logo.svg";
import arrowSrc from "./media/Icon.svg";
import { Profile } from "../Profile/profile-info";
import { UiButton } from "../uikit/ui-button";

export function Header({ player }) {
  return (
    <div className="w-full h-24 flex justify-between items-center shadow-lg bg-white">
      <div className="w-96 flex justify-around items-center my-6 mx-8">
        <Image src={logoSrc} alt="X|Online" />
        <div className="h-8 w-px bg-gray-400 opacity-50" />
        <UiButton classname="w-44" size="lg" variant="primary">
          New Game
        </UiButton>
      </div>
      <button className="w-40 mr-8 flex items-center transition-colors text-teal-600 hover:text-teal-500">
        <Profile player={player} />
        <Image src={arrowSrc} alt="arrow" />
      </button>
    </div>
  );
}
