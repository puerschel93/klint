import { ThemeSwitcher } from "@/components/theme-switcher";
import { UserInformation } from "@/components/user-information";
import type { FC } from "react";
import { Clock } from "../clock";

export const Header: FC = () => {
	/** Render */
	return (
		<div className="relative flex flex-row justify-between w-full">
			<Clock />
			<UserInformation />
			<ThemeSwitcher />
		</div>
	);
};
