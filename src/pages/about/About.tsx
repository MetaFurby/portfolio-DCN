import { Link } from "react-router-dom";
import { AuthorData } from "../../data/author"
import { Card, TagButton } from "../../components/atoms";
import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import React from "react";

const About = () => {
	const author = AuthorData;
	const techStacks = useSelector((store: AppStore) => store.techstacks);
	const techTypes = useSelector((store: AppStore) => store.techtypes);
	const locale = 'en-US';
  return (
	<div>
		<div className="mt-[50px] md:mt-[60px]">
		</div>
		<div className="flex flex-wrap lg:flex-nowrap gap-[20px] p-[20px]">
			<Card className="flex flex-wrap p-[20px] justify-center gap-[20px] bg-[#8DA9C4] w-full lg:w-[300px] h-fit shrink-0">
				<img className="w-[150px] h-[150px] rounded-full" src={author.picture} alt={author.name} />
				<div>
					<h1 className="font-bold text-[24px]">{author.name}</h1>
					<h3 className="font-bold text-[18px] text-black/50">{author.role}</h3>
					<p className="text-black/50">{author.city}, {author.country}</p>
					<p className="text-black/50">{author.email}</p>
					<div className="flex gap-[20px] mt-[10px] text-[36px] justify-evenly">
						<Link to={author.linkedln} target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain colored"></i></Link>
						<Link to={author.github} target="_blank" rel="noopener noreferrer"><i className="devicon-github-original colored"></i></Link>
						<Link to={author.resume} className="border-black border-[2px] mt-[5px] p-[10px] h-[40px] leading-[15px] rounded-[5px] text-[16px]" target="_blank" download>
							Resume
						</Link>
					</div>
				</div>
			</Card>
			<Card className="bg-white flex flex-col gap-[20px]">
				<div>
					<p>{author.bio}</p>
				</div>
				<div>
					<h1 className="font-bold text-[20px]">Technical Skills</h1>
					<div className="relative grid gap-[20px] bg-white p-[20px] md:grid-cols-3 ">
						{techTypes.map((item, index) => (
							<React.Fragment key={item.name}>
								{index !== 0 && <div className="md:col-span-3 bg-[#E0E0E0] h-[1px]"></div>}
								<div className="relative -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">
											{item.icon}
									</div>
									<div className="text-left ml-[5px]">
										<p className="text-sm font-medium text-gray-900">
											{item.name}
										</p>
									</div>
								</div>
								<div className="flex flex-wrap md:justify-end gap-[10px] md:col-span-2">
									{techStacks.filter(techStack => techStack.type === item.name).map(techStack => (
										<div key={techStack.id} className="flex flex-col">
											<TagButton className="border-none hover:bg-inherit" key={techStack?.id} id={techStack?.id ?? 0} name={techStack?.name ?? ""} image={techStack?.image ?? ""}/>
											<p className="text-black/50 text-center text-[12px]">{techStack?.yearsOfExperience} {techStack?.yearsOfExperience === 1 ? 'year' : 'years'}</p>
										</div>
									))}
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
				<div>
					<h1 className="font-bold text-[20px] mb-[20px]">Work History</h1>
					<div className="flex flex-col gap-[20px] text-[16px]">
						{author.workHistory.map((item, index) => (
							<React.Fragment key={item.id}>
								{index !== 0 && <div className="md:col-span-3 bg-[#E0E0E0] h-[1px]"></div>}
								<div className="relative -m-3 flex flex-wrap sm:flex-nowrap gap-[20px] sm:gap-[40px] items-center rounded-lg p-2 pl-[12px] transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
									<p className="font-bold">{item.position} <span className="font-light">| {item.company} {item.location}</span></p>
									<p className="sm:ml-auto whitespace-nowrap">{item.startDate.toLocaleDateString(locale, {month : "numeric", year: "numeric"})} - {item.endDate.toLocaleDateString(locale, {month : "numeric", year: "numeric"})}</p>
								</div>
								<div>
									<ul className="list-disc pl-[20px]">
										{item.description.split('-').map(element => (<li key={element}><p>{element}</p></li>))}
									</ul>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
				<div>
					<h1 className="font-bold text-[20px] mb-[20px]">Education</h1>
					<div className="flex flex-col gap-[20px]">
						{author.education.map((item, index) => (
							<React.Fragment key={item.id}>
								{index !== 0 && <div className="md:col-span-3 bg-[#E0E0E0] h-[1px]"></div>}
								<div className="relative -m-3 sm:gap-[40px] flex flex-wrap sm:flex-nowrap items-center rounded-lg p-2 pl-[12px] transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
									<p className="font-bold">{item.school} <span className="font-light">| {item.location}</span></p>
									<p className="sm:ml-auto whitespace-nowrap">{item.startDate.toLocaleDateString(locale, {month : "numeric", year: "numeric"})} - {item.endDate.toLocaleDateString(locale, {month : "numeric", year: "numeric"})}</p>
								</div>
								<div className="relative -m-3 gap-[20px] flex items-center rounded-lg p-2 pl-[12px] transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
									<p className="font-bold">{item.grade}, <span className="font-light">{item.career}</span></p>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</Card>
		</div>
	</div>

  )
}

export default About