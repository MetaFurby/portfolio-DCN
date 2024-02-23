import { Link } from "react-router-dom"
import { Card, TagButton } from "../../../components/atoms"
import { TechStack } from "../../../models"
type ProjectListItemProps = {
	id: number
	name: string
	duration: string
	mainPicture: string
	techstacks: (TechStack | undefined) []
}
const ProjectListItem = ({id, name, duration, mainPicture, techstacks}: ProjectListItemProps) => {
  return (
	<Link to={id.toString()}>
		<Card className={`transition-colors duration-200 ease-in-out bg-white hover:bg-[#8DA9C4]/50 h-[100%]`}>
			<img className="bg-[#F8F8F8] rounded-[10px] w-full h-[300px] object-contain" src={new URL(`/src/assets/project-images/${mainPicture}`, import.meta.url).toString()} alt={name} />
			<h1 className="mt-[20px] text-[16px] text-center font-bold">{name}</h1>
			<h3 className="mt-[10px] text-[14px] text-center text-black/50">{duration}</h3>
			<div className="border-[1px] justify-center border-[#f0f0f0] rounded-[10px] mt-[10px] flex flex-wrap gap-[10px]">
				{techstacks.map((techStack) => (
					<TagButton className="border-none hover:bg-inherit" key={techStack?.id} id={techStack?.id ?? 0} name={techStack?.name ?? ""} image={techStack?.image ?? ""}/>
				))}
			</div>
		</Card>
	</Link>
  )
}

export default ProjectListItem