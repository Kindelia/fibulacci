import Router from 'next/router';
import { useState } from 'react';
import useSound from 'use-sound';

import { LogoIcon } from '../Icons/LogoIcon';

export type LoadingScreenProps = {
  setStep: (step: 0 | 1 | 2) => void;
};

export function LoadingScreen(props: LoadingScreenProps) {
  const { setStep } = props;

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const [play] = useSound("/sounds/loading.mp3", { volume: 0.9 });

  function handlePlaySound() {
    if (isPlayingSound) return;

    try {
      play();
      setIsPlayingSound(true);
    } catch (error) {
      setIsPlayingSound(false);
    }
  }

  function goToStartScreen() {
    handlePlaySound();

    setTimeout(() => {
      setStep(1);
      Router.push("/?step=1");
    }, 5000);
  }

  if (!isPlayingSound) {
    return (
      <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
        <button
          className="bg:white py:20 px:100 f:black rounded bg:gray-60:hover"
          onClick={goToStartScreen}
        >
          Clique para iniciar o jogo!
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
      <LogoIcon className="h:20% @float|3s|ease-in-out|infinite mb:10%" />
      <p>Welcome Fibulacci</p>
      <p>O seu divertimento está sendo carregado...</p>
    </div>
  );
}
