import mergeClassNames from "../../utilities/mergeClassNames";

type TagButtonProps = {
	id: number;
	name: string;
	image: string;
	isSelected?: boolean;
	handleClick?: (id: number) => void;
	className?: string;
}

const TagButton = ({id, name, image, isSelected = false, handleClick = () => {}, className } : TagButtonProps) => {
  return (
	<button onClick={() => handleClick(id)} 
		className={mergeClassNames(className,`rounded-lg border border-[#E0E0E0] p-[10px] transition duration-150 ease-in-out ${!isSelected && 'hover:bg-[#E9E9E9]'} 
		${isSelected && 'bg-[#8DA9C4] text-[#FFFFFF] hover:bg-[#8DA9C4]/80'}`)} 
		key={id}>
		{image === "" && <div className="w-[20px] h-[20px]"></div>}
		{ image !== '' &&<img className="w-[20px] h-[20px] m-auto" src={image} alt={name} />}
		<h4 className="text-[12px]">{name}</h4>
	</button>
  )
}

export default TagButton