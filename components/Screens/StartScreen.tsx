import { ConnectButton } from "@rainbow-me/rainbowkit";
import Router from "next/router";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import useSound from "use-sound";
import { useAccount } from "wagmi";

import { LogoIcon } from "../Icons/LogoIcon";

export function StartScreen() {
  const x = useAccount();

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const [play, { stop }] = useSound("/sounds/magnetar.mp3", { volume: 0.9 });

  function handlePlaySound() {
    if (isPlayingSound) return;

    try {
      play();
      setIsPlayingSound(true);
    } catch (error) {
      setIsPlayingSound(false);
    }
  }
  function goToPlay() {
    Router.push("/play");
  }

  function goToCredits() {
    Router.push("/credits");
  }

  useEffectOnce(() => {
    handlePlaySound();
  });

  return (
    <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
      <LogoIcon className="h:20% @float|3s|ease-in-out|infinite mb:10%" />
      <p>Welcome Fibulacci</p>
      <button
        className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
        onClick={goToPlay}
      >
        START
      </button>
      <ConnectButton chainStatus={"none"} />
      <p onClick={goToCredits} className="cursor:pointer">
        CREDITS
      </p>
    </div>
  );
}
