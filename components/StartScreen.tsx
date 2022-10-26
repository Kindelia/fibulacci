import { ConnectButton } from "@rainbow-me/rainbowkit";
import Router from "next/router";

import { LogoIcon } from "./LogoIcon";

export function StartScreen() {
  function goToPlay() {
    Router.push("/play");
  }

  function goToCredits() {
    Router.push("/credits");
  }

  return (
    <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
      <LogoIcon className="h:40% @float|3s|ease-in-out|infinite" />
      <p>Welcome Fibulacci</p>
      <button
        className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
        onClick={goToPlay}
      >
        START
      </button>
      <ConnectButton />
      <p onClick={goToCredits} className="cursor:pointer">
        CREDITS
      </p>
    </div>
  );
}
