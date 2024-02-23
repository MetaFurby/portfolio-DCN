import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import FilterMenu from "../../../components/organisms/FilterMenu";
import { useFilterContext } from "../../../context/filter.context";
import ProjectListItem from "../components/ProjectListItem";

const ProjectList = () => {
	const techStacks = useSelector((store: AppStore) => store.techstacks);
	const projects = useSelector((store: AppStore) => store.projects).map(project => ({...project, techstacks: project.techstacks.map(ts => techStacks.find(ts2 => ts2.id === ts))}));
	const techTypes = useSelector((store: AppStore) => store.techtypes);
	const {filters, setFilters} = useFilterContext();
	const [filteredProjects, setFilteredProjects] = useState(projects);

	useEffect(() => {
		if (filters.length === 0) {
			setFilteredProjects(projects);
		} else {
			setFilteredProjects(projects.filter(project => project.techstacks.some(ts => filters.includes(ts?.id ?? 0))));
		}
	}, [filters])

  return (
	<>
		<div className="flex flex-wrap">
			<FilterMenu techStacks={techStacks} techTypes={techTypes} filters={filters} setFilters={setFilters}/>
			<div className="flex flex-wrap-reverse gap-[20px] mt-[40px] mx-[20px] w-full justify-between">
				<h1 className="mt-[35px] text-[20px] font-bold">Projects</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 m-[20px] gap-[20px] w-full">
  				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} id= {project.id} name={project.name} duration={project.duration} mainPicture={project.mainPicture} techstacks={project.techstacks} />
				))}
			</div>
		</div>
	</>
  )
}

export default ProjectList