import { useRef } from 'react';

import { usePlayer } from '../hooks/usePlayer';
import { Blob } from './Blob';

type PlayerProps = {};

export function Player(_props: PlayerProps) {
  const player = usePlayer();


  return <Blob side="right" x={player.x} y={player.y} />
}
