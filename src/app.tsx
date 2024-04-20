import { Time } from "@/components/time";
import "./index.css";

export const App = () => {
	return (
		<div className="w-screen h-screen overflow-hidden dark">
			<div className="bg-green-400 dark:bg-zinc-950 p-16 w-screen h-screen overflow-hidden">
				<Time />
			</div>
		</div>
	);
};
