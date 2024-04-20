import { Input } from "@/components/form";
import { useAppStore } from "@/stores/app-store";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { type UserForm as UserFormType, userFormSchema } from "./schemas";

export const UserForm: FC = () => {
	/** State */
	const { setUserName } = useAppStore();

	/** Hooks */
	const methods = useForm<UserFormType>({
		resolver: zodResolver(userFormSchema),
	});

	/** Functions */
	function handleOnSubmit(data: UserFormType) {
		setUserName(data.name);
	}

	/** Render */
	return (
		<form onSubmit={methods.handleSubmit(handleOnSubmit)}>
			<Input {...methods.register("name")} />
		</form>
	);
};
