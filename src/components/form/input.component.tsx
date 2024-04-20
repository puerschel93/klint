import { forwardRef } from "react"; /** Props Interface */

/** Props Interface */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => {
		return (
			<input
				ref={ref}
				{...props}
				className="bg-transparent w-full font-medium text-2xl text-center placeholder:text-zinc-700 outline-none"
				autoComplete="off"
			/>
		);
	},
);
