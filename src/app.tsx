import { Time } from "@/components/time";
import { useAppStore } from "@/stores/app-store";
import clsx from "clsx";
import "./index.css";

export const App = () => {
	const { colorMode } = useAppStore();

	/** Render */
	return (
		<div
			className={clsx(
				"w-screen h-screen overflow-hidden",
				colorMode === "dark" ? "dark" : "",
			)}
		>
			<div className="flex justify-center items-center bg-white dark:bg-zinc-950 p-16 w-screen h-screen overflow-hidden">
				<Time />
			</div>
		</div>
	);
};
