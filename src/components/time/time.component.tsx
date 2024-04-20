import { useTime } from "@/hooks/use-time";
import type { FC } from "react";

export const Time: FC = () => {
	/** Hooks */
	const { time } = useTime();

	/** Render */
	return (
		<div className="flex flex-row gap-4 overflow-x-visible select-none">
			{time.split("").map((char, index) => {
				const charId = `${char}-${index}`;

				/** Render */
				return (
					<div key={charId} className="w-14 text-center overflow-visible">
						<h1 className="font-grtsk text-[8rem] text-center text-zinc-400">
							{char}
						</h1>
					</div>
				);
			})}
		</div>
	);
};
