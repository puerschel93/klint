import { useAppStore } from "@/stores/app-store";
import type { FC } from "react";
import { UserForm } from "./user-form.component";

export const Personal: FC = () => {
	/** Hooks */
	const { userName } = useAppStore();

	/** Fallback */
	if (!userName) return <UserForm />;

	/** Render */
	return <p>{userName ?? "HELLO"}</p>;
};
