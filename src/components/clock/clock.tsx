import { useTime } from "@/hooks/use-time";
import type { FC } from "react";

export const Clock: FC = () => {
	/** State */
	const { time } = useTime();

	/** Render */
	return (
		<div className="absolute inset-0 flex justify-center">
			<p className="tracking-wider">{time}</p>
		</div>
	);
};
