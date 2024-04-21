import { ThemeSwitcher } from "@/components/theme-switcher";
import { UserInformation } from "@/components/user-information";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<div className="flex flex-row justify-between w-full">
			<UserInformation />
			<ThemeSwitcher />
		</div>
	);
};
