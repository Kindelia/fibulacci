import $ from "@master/literal";

export type EventLogsProps = {};

export function EventLogs(_: EventLogsProps) {
  return (
    <div className={$`fixed buttom:0 left:0 h:500 w:500 bg:black opacity:0.3`}>
      <p>Events</p>
      <ul>
        {[
          "Player use fireball",
          "Player move to 0, 0",
          "Player die",
          "Player use fireball",
          "Player move to 0, 0",
        ].map((log) => (
          <li>{log}</li>
        ))}
      </ul>
    </div>
  );
}
