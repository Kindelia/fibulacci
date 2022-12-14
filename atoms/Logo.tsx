import $ from "@master/literal";

export type LogoProps = {
	className?: string;
};

export function Logo(props: LogoProps): JSX.Element {
	const { className } = props;

	return (
		<img src="logo.png" className={$`w:561 h:221 ${className}`} alt="logo" />
	);
}
