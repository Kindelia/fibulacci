import $ from '@master/literal';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { useInterval } from 'react-use';

import { usePlayerMoveMutation } from '../../hooks/useMoveMutation';
import { FibObject } from '../../hooks/useStateQuery';
import { addGameStoreEvent, gameStore, setGameStore } from '../../stores/gameStore';
import { Blob } from '../Creatures/Blob';
import { Window } from '../Interfaces/Window';

if (typeof window !== "undefined") {
  window.addEventListener("click", (e) => {
    addGameStoreEvent({
      type: "fireball",
      position: {
        x: e.offsetX,
        y: e.offsetY,
      },
      ms: 5000,
    });
  });
}

type PlayerProps = {
  player: FibObject;
};

export function Player(props: PlayerProps) {
  const { player } = props;

  const playerMoveMutation = usePlayerMoveMutation();
  const game = useStore(gameStore);

  const scale = 32;

  const top = player?.y * scale;
  const left = player?.x * scale;

  useInterval(() => {
    window?.scrollTo({
      top,
      left,
    });
  }, 500);

  useEffect(() => {
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      // if(game.isLoading) {
      //   return;
      // }

      if (
        !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
          keyboardEvent.key
        )
      ) {
        return;
      }

      playerMoveMutation.mutate({
        player,
        keyboardEvent,
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [player, game]);

  if (game.isLoading && player?.fat !== game?.fat) {
    // @ts-ignore
    setGameStore({ isLoading: false, fat: player?.fat });
  }

  return (
    <>
      <Blob side="right" {...player} x={left} y={top} enableDebug />
      {/* <RangeTile top={top} left={left} /> */}
      {game.isLoading ? (
        <div className={$`abs top:${top - 20} left:${left - 35}`}>
          <p>Loading...</p>
        </div>
      ) : null}
      <Window player={player} />
      {/* <EventLogs /> */}
      {/* {game.events.map((e) => {
        return {
          fireball: (
            <FireballSkill x={e.position.x} y={e.position.y} id={e.id} />
          ),
        }[e.type];
      })} */}
    </>
  );
}
