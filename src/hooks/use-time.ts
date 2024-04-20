import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function useTime() {
	/** State */
	const [time, setTime] = useState<string>(dayjs().format("HH:mm"));

	/** Effects */
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(dayjs().format("HH:mm"));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return { time };
}
