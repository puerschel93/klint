import { useEffect, useState } from "react";

export function useHover(ref: React.MutableRefObject<HTMLElement>) {
	/** State */
	const [isHovered, setIsHovered] = useState<boolean>(false);

	/** Function */
	function handleMouseEnter() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}

	/** Effects */
	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [ref, handleMouseEnter, handleMouseLeave]);

	/** Return */
	return isHovered;
}
