import $ from "@master/literal";

export type RangeTiledProps = {
  top: number;
  left: number;
};

export function RangeTile(props: RangeTiledProps) {
  const { top, left } = props;
  return (
    <div
      className={$`abs bg:yellow-80 left:${left - 32 * 4} top:${
        top - 32 * 4
      } h:${32 * 10} w:${32 * 10} opacity:.3`}
    />
  );
}
