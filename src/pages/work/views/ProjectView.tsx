import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import ImageViewer from 'react-simple-image-viewer';
import { AppStore } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { Card, TagButton } from "../../../components/atoms";

const ProjectView = () => {
	const { id } = useParams();
	const project = useSelector((store: AppStore) => store.projects.find(project => project.id === Number(id)));
	if (!project) return <div>Project not found</div>;
	const techStacks = useSelector((store: AppStore) => store.techstacks);
	const projectStacks = project.techstacks.map(ts => techStacks.find(ts2 => ts2.id === ts))
	const [picIndex, setPicIndex] = useState(0);
  	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = project.pictures.length > 0 ? project.pictures.map(pic => new URL(`/src/assets/project-images/${pic}`, import.meta.url).toString()) : [new URL(`/src/assets/project-images/${project.mainPicture}`, import.meta.url).toString()];

	const openImageViewer = useCallback(() => {
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setPicIndex(0);
		setIsViewerOpen(false);
	};

  return (
	<div className="flex flex-col gap-[20px]">
		<div className="flex mt-[40px] px-[20px] w-full">
			<h1 className="mt-[35px] text-[20px] font-bold">{project.name}</h1>
		</div>
		<div className="px-[20px]">
			<Card className="px-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
				<div className="lg:col-span-2 ">
					<div className="flex justify-center bg-[#f8f8f8] rounded-[10px] h-[500px] cursor-pointer" onClick={() => openImageViewer()}>
						<img 
							src={new URL(`/src/assets/project-images/${project.pictures.length > 0 ? project.pictures[picIndex] : project.mainPicture}`, import.meta.url).toString()} 
							className="m-auto max-h-[500px]" 
							alt="project_img" />
					</div>
					<div className="flex flex-wrap justify-center lg:justify-start mt-[20px] gap-[20px]">
						{project.pictures.map((item, i) => (
						<div key={i} className={`flex justify-center h-[80px] w-[80px] rounded-[10px] cursor-pointer ${i === picIndex ? 'border-[2px] border-[#000]' : ''}`}>
							<img 
								src={new URL(`/src/assets/project-images/${item}`, import.meta.url).toString()}
								className="m-auto max-h-[75px] rounded-[10px]"
								alt="project_img"
								onMouseEnter={() => setPicIndex(i)}
							/>
						</div>
						))}
					</div>
				</div>
				<div>
					<div className="border-[1px] justify-center border-[#f0f0f0] rounded-[10px] mt-[10px] flex flex-wrap gap-[10px]">
						{projectStacks.map((techStack) => (
							<TagButton className="border-none hover:bg-inherit" key={techStack?.id} id={techStack?.id ?? 0} name={techStack?.name ?? ""} image={techStack?.image ?? ""}/>
						))}
					</div>
				</div>
				<div className="lg:col-span-3">
					<p className="mt-[20px] font-bold">{project.company}</p>
					<p className="text-black/50">{project.duration}</p>
					<ul className="list-disc mt-[20px] pl-[20px]">
						{project.description.split('•').map(element => (<li key={element}><p>{element}</p></li>))}
					</ul>
				</div>
			</Card>
		</div>
		{isViewerOpen && (
			<div className="z-50">
				<ImageViewer
				src={ images }
				currentIndex={ picIndex }
				disableScroll={ false }
				closeOnClickOutside={ true }
				onClose={ closeImageViewer }
				/>
			</div>
		)}
	</div>
  )
}

export default ProjectView