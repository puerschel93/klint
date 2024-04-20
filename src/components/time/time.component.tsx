import { useTime } from "@/hooks/use-time";
import type { FC } from "react";

export const Time: FC = () => {
	const { time } = useTime();

	/** Render */
	return <h1 className="font-bold font-grtsk text-[8rem]">{time}</h1>;
};
