import { useCallback, useEffect, useState } from "react";
import ImageViewer from 'react-simple-image-viewer';
import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import FilterMenu from "../../../components/organisms/FilterMenu";
import { useFilterContext } from "../../../context/filter.context";
import ImageItem from "./ImageItem";

const Dashboard = () => {
	const techStacks = useSelector((store: AppStore) => store.techstacks);
	const projects = useSelector((store: AppStore) => store.projects);
	const techTypes = useSelector((store: AppStore) => store.techtypes);
	const {filters, setFilters} = useFilterContext();
	const [currentImage, setCurrentImage] = useState(0);
  	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const images = (filteredProjects.map(project => project.pictures.map((picture) => new URL(`/src/assets/project-images/${picture}`, import.meta.url).toString()))).flat(1).reverse();
	
	useEffect(() => {
		if (filters.length === 0) {
			setFilteredProjects(projects);
		} else {
			setFilteredProjects(projects.filter(project => project.techstacks.some(ts => filters.includes(ts))));
		}
	}, [filters])

	const openImageViewer = useCallback((index : number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

  return (
	<>
		<div className="flex flex-wrap">
			<FilterMenu techStacks={techStacks} techTypes={techTypes} filters={filters} setFilters={setFilters}/>
			<div className="flex gap-[20px] mt-[40px] mx-[20px] w-full">
				<h1 className="mt-[35px] text-[20px] font-bold">My Latest Work</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-[20px] gap-[20px] w-full">
  				{images.map((image, index) => (
					<ImageItem key={index} imgSrc={image} index={index} openImageViewer={openImageViewer} />
				))}
			</div>
			{isViewerOpen && (
				<div className="z-50">
					<ImageViewer
					src={ images }
					currentIndex={ currentImage }
					disableScroll={ false }
					closeOnClickOutside={ true }
					onClose={ closeImageViewer }
					/>
				</div>
			)}
		</div>
	</>
  )
}

export default Dashboard