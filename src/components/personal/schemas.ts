import * as z from "zod";

export const userFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
});

export type UserForm = z.infer<typeof userFormSchema>;
