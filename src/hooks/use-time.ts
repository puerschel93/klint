import { useAppStore } from "@/stores/app-store";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function useTime() {
	/** Zustand */
	const { timeFormat } = useAppStore();

	/** State */
	const [time, setTime] = useState<string>(dayjs().format(timeFormat));

	/** Effects */
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(dayjs().format(timeFormat));
		}, 1000);

		return () => clearInterval(interval);
	}, [timeFormat]);

	return { time };
}
