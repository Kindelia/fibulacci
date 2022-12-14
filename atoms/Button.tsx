import $ from "@master/literal";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function Button(props: ButtonProps): JSX.Element {
	const { className, children, ...rest } = props;

	return (
		<button
			className={$`py:18 px:70 rounded bg:#23dc79 bg:green-80:hover  box-shadow:0|0|3|5|#6508a6 color:black ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
