import { useAppStore } from "@/stores/app-store";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

/** Props Interface */
interface AppContainerProps {
	children: ReactNode;
}

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
	const { colorMode } = useAppStore();

	/** Render */
	return (
		<div
			className={clsx(
				"w-screen h-screen overflow-hidden",
				colorMode === "dark" ? "dark" : "",
			)}
		>
			<div
				className={clsx(
					"w-full h-full",
					"bg-primaryGray-100 dark:bg-primaryGray-950",
					"p-8",
					"flex flex-col gap-8",
				)}
			>
				{children}
			</div>
		</div>
	);
};
