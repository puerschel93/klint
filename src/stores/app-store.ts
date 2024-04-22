import type { TimeFormat } from "@/types/time";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppStore {
	colorMode: "light" | "dark";
	userName: string | undefined;
	timeFormat: TimeFormat;
	toggleColorMode: () => void;
	setTimeFormat: (timeFormat: TimeFormat) => void;
	setUserName: (userName: string) => void;
	resetUserName: () => void;
}

export const useAppStore = create(
	persist<AppStore>(
		(set) => ({
			colorMode: "dark",
			userName: undefined,
			timeFormat: "HH:mm",
			toggleColorMode: () => {
				set((state) => ({
					colorMode: state.colorMode === "dark" ? "light" : "dark",
				}));
			},
			setTimeFormat: (timeFormat: TimeFormat) =>
				set(() => ({
					timeFormat,
				})),
			setUserName: (userName: string) =>
				set(() => ({
					userName,
				})),
			resetUserName: () =>
				set(() => ({
					userName: undefined,
				})),
		}),
		{
			name: "app-store",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
