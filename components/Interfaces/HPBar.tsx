import $ from '@master/literal';

import { EmptyBar } from './EmptyBar';

export type HPBarProps = {};

export function HPBar(_props: HPBarProps) {
  const scale = 3;

  const width = 130 * scale;
  const height = 18 * scale;

  return (
    <div className={$`rel w:${width} h:${height}`}>
      <EmptyBar />
      <div
        className={$`
          abs 
          h:${height} 
          left:0 
          overflow:hidden
          top:0
          w:${width - 100} 
        `}
      >
        <div
          className={$`
            bg:cover
            bg:no-repeat
            bg:url('/images/hp-bar.png')
            h:${height}
            w:${width}
          `}
        />
      </div>
      <p className="abs top:36% left:45%">HP</p>
    </div>
  );
}
