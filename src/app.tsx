import { AppContainer } from "@/components/app-container";
import { Header } from "@/components/header";
import "./index.css";

export const App = () => {
	/** Render */
	return (
		<AppContainer>
			<Header />
			<div className="w-full h-full" />
		</AppContainer>
	);
};
