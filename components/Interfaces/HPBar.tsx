import $ from "@master/literal";

import { EmptyBar } from "./EmptyBar";

export type HPBarProps = {
  hp: number;
};

export function HPBar(props: HPBarProps) {
  const { hp } = props;
  const scale = 3;

  const width = 130 * scale;
  const height = 18 * scale;

  const defaultHP = 250;
  const currentHPWidth = hp * width / defaultHP 

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
          w:${currentHPWidth === 0 ? 1 : currentHPWidth} 
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
      <p className="abs top:36% left:35%">HP: {hp}</p>
    </div>
  );
}
