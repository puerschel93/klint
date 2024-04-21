import { useAppStore } from "@/stores/app-store";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

export const ThemeSwitcher: FC = () => {
	/** State */
	const { colorMode, toggleColorMode } = useAppStore();

	/** Render */
	return (
		<div
			className="relative flex flex-row gap-4 bg-primaryGray-800 bg-opacity-5 dark:bg-opacity-30 p-2 rounded-full cursor-pointer"
			onClick={toggleColorMode}
			onKeyUp={toggleColorMode}
		>
			<TbMoonFilled
				className={clsx(
					"relative z-10",
					colorMode === "light" ? "opacity-50" : "opacity-100",
				)}
			/>
			<TbSunFilled
				className={clsx(
					"relative z-10",
					colorMode === "dark" ? "opacity-50" : "opacity-100",
				)}
			/>
			<motion.div
				layoutId="theme-switcher-floater"
				className={clsx(
					"top-1 -z-0 absolute bg-opacity-10 dark:bg-opacity-100 bg-primaryGray-800 rounded-full h-[calc(100%-0.5rem)] aspect-square",
					colorMode === "dark" ? "left-1" : "right-1",
				)}
			/>
		</div>
	);
};
