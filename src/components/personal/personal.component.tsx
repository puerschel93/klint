import { useAppStore } from "@/stores/app-store";
import type { FC } from "react";
import { UserForm } from "./user-form.component";

export const Personal: FC = () => {
	/** Hooks */
	const { userName } = useAppStore();

	/** Render */
	return (
		<div className="flex justify-center items-center min-h-28">
			{userName ? (
				<h2 className="text-2xl">Good morning, {userName}.</h2>
			) : (
				<UserForm />
			)}
		</div>
	);
};
