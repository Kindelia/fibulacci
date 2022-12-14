export type BgVideoProps = {};

export function BgVideo(_props: BgVideoProps) {
	return (
		<video
			autoPlay={true}
			muted={true}
			loop={true}
			className="min-w:full fixed"
		>
			<source src="bg-screen.mp4" type="video/mp4" />
		</video>
	);
}
