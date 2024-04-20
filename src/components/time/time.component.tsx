import { useTime } from "@/hooks/use-time";
import type { FC } from "react";

export const Time: FC = () => {
	/** Hooks */
	const { time } = useTime();

	/** Render */
	return (
		<div className="grid grid-cols-8 overflow-hidden select-none">
			{time.split("").map((char) => (
				<h1
					key={Math.random()}
					className="-mx-1.5 font-grtsk text-[8rem] text-center text-zinc-400"
				>
					{char}
				</h1>
			))}
		</div>
	);
};
