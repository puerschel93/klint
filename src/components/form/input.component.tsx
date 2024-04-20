import { forwardRef } from "react"; /** Props Interface */

/** Props Interface */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => {
		return <input ref={ref} {...props} />;
	},
);
