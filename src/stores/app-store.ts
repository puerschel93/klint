import type { TimeFormat } from "@/types/time";
import { create } from "zustand";

interface AppStore {
	colorMode: "light" | "dark";
	timeFormat: TimeFormat;
	toggleColorMode: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
	colorMode: "dark",
	timeFormat: "HH:mm:ss",
	toggleColorMode: () => {
		set((state) => ({
			colorMode: state.colorMode === "dark" ? "light" : "dark",
		}));
	},
	setTimeFormat: (timeFormat: TimeFormat) =>
		set(() => ({
			timeFormat,
		})),
}));
