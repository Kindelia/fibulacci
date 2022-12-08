import $ from "@master/literal";
import { FibObject } from "../../hooks/useStateQuery";

import { EXPBar } from "./EXPBar";
import { HPBar } from "./HPBar";
import { WindowSlot } from "./WindowSlot";

export type WindowProps = {
	player: FibObject;
	players: FibObject[];
};

export function Window(props: WindowProps) {
	const { player, players } = props;

	return (
		<div
			className={$`fixed right:0 top:0 w:500 h:100vh`}
			style={{
				borderImageSource: "url(/images/window.png)",
				borderImageSlice: "24 24 24 24 fill",
				borderImageWidth: "24px 24px 24px 24px",
			}}
		>
			<div className="flex flex:col h:100vh jc:space-around ai:center">
				<div
					className={$`
          w:160
          h:160
          bg:orange-80 
          flex
          bg:url('/images/maps/world-terrain.png')
          bg:no-repeat
          bg:cover
          rel
        `}
					style={{
						zoom: 2,
						imageRendering: "auto",
					}}
				>
					{players?.map((p) => (
						<div
							key={p.num}
							className={$`abs bg:red-60 h:5 w:5 top:${p?.y} left:${p?.x} round @flash|5s|infinite`}
						/>
					))}
					<div
						className={$`abs bg:green-60 h:5 w:5 top:${player?.y} left:${player?.x} round`}
					/>
				</div>
				<div className="flex flex:col gap:2">
					<HPBar hp={player?.hp} />
				</div>
				<EXPBar totalEXP={player?.xp_tot} />
				<WindowSlot />
			</div>
		</div>
	);
}
