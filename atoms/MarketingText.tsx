import $ from "@master/literal";

export type MarketingTextProps = {
	className?: string;
};

export function MarketingText(props: MarketingTextProps) {
	const { className } = props;

	return (
		<div className={$`color:white text:center flex flex:col gap:30 ${className}`}>
			<h1>Unleash Kindelia Capabilities</h1>
			<p>
				Enter a world of endless possibilities with Fibulacci, the world's first
				<br />
				Layer 1 MMO game . Experience a new level of security and <br />
				decentralization as you explore four elemental biomes, learn powerful
				<br />
				magic spells and battle players and creatures alike. Enjoy permanent
				<br />
				progress and the trustless security of Layer 1 blockchain technology.
				<br />
				Join the tournament and become a master of the magical arts with
				Fibulacci!
			</p>
		</div>
	);
}
