import $ from "@master/literal";
import { useStore } from "@nanostores/react";
import { skillMutation } from "../hooks/useSkillMutation";
import { gameStore, setGameStore } from "../stores/gameStore";
import { createDiamond } from "../utils/utils";

export type FireballRangeSkillProps = {
	top: number;
	left: number;
};

export function FireballRangeSkill(props: FireballRangeSkillProps) {
	const { top, left } = props;

	const range = 5;

	const game = useStore(gameStore);

	const diamond = createDiamond(range);

	return (
		<div className={$`abs top:${top - 32 * range} left:${left - 32 * range}`}>
			{diamond.map((row, y) => (
				<div className={$`flex`}>
					{row.map((cell, x) => (
						<div
							key={`${x}-${y}`}
							className={$`
								w:32 
								h:32 
								${cell === 1 ? "bg:red-70 opacity:.3" : ""} 
								left:${left - 32 * range + x * 32} 
								top:${top - 32 * range + y * 32}
								${cell === 1 ? "cursor:pointer" : ""}
								${cell === 1 ? "bg:green-70:hover" : ""}
							`}
							onClick={() => {
								if (cell !== 1) return;

								const newX = x - 5;
								const newY = y - 5;

								const targetPosition = {
									x: left + newX * 32,
									y: top + newY * 32,
								};

								skillMutation({
									playerId: game.player.num,
									targetPosition: {
										x: targetPosition.x / 32,
										y: targetPosition.y / 32,
									},
									playerCurrentPosition: { x: left / 32, y: top / 32 },
									skillId: 0,
								});

								// @ts-ignore
								setGameStore({ isEnableRangeSkill: false });
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
}
