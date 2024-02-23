import * as React from "react";
import mergeClassNames from "../../utilities/mergeClassNames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={mergeClassNames(className, "rounded-[10px] p-[16px] border-[2px] border-[#f0f0f0] aria-disabled:cursor-not-allowed aria-disabled:border-gray-500 aria-disabled:bg-gray-500")}
			{...props}
		/>
	);
});

Card.displayName = "Card";

export default Card;
