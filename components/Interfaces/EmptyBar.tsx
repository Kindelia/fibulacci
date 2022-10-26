import $ from "@master/literal";

export type EmptyBarProps = {};

export function EmptyBar(_props: EmptyBarProps) {
  const scale = 3;

  const width = 130 * scale;
  const height = 18 * scale;

  return (
    <div
      className={$`
      bg:cover
      bg:no-repeat
      bg:url('/images/empty-bar.png')
      h:${height}
      w:${width}
    `}
    />
  );
}
