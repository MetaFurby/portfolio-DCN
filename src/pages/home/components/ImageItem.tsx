import { useRef } from "react";
import { useIsVisible } from "../../../hooks/useIsVisible";

export type ImageItemProps = {
	index: number;
	imgSrc: string;
	openImageViewer: (i: number) => void;
}

const ImageItem = ({index, imgSrc, openImageViewer} : ImageItemProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(ref);
	return (
		<div className={`flex transition-opacity ease-in duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} ref={ref}>
			{<button className="h-auto rounded-[10px] bg-[#F8F8F8] hover:bg-[#f0f0f0] transition-colors duration-200 ease-in-out" onClick={() => openImageViewer(index)}>
				<img className="rounded-[10px]" src={imgSrc} alt={imgSrc} />
			</button>}
		</div> 
	)
}

export default ImageItem;
