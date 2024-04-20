import { Personal } from "@/components/personal";
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
			<div className="flex flex-col justify-center items-center gap-8 bg-white dark:bg-zinc-950 p-16 w-screen h-screen overflow-hidden">
				<Time />
				<Personal />
			</div>
		</div>
	);
};
