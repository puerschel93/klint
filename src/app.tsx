import { AppContainer } from "@/components/app-container";
import { Content } from "@/components/content";
import { Header } from "@/components/header";
import "./index.css";

export const App = () => {
	/** Render */
	return (
		<AppContainer>
			<Header />
			<Content />
		</AppContainer>
	);
};
