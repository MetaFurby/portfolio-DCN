import React from 'react';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsSliders } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechStack, TechTypeModel } from '../../models';
import { SimpleTransition, TagButton } from '../atoms';
import { createPortal } from 'react-dom';

export type FilterMenuProps = {
	techTypes: TechTypeModel[],
	techStacks: TechStack[],
	filters: number[],
	setFilters: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FilterMenu({ techTypes, techStacks, filters, setFilters } : FilterMenuProps) {

	const handleFilterClicked = (id: number) => {
		if (filters.includes(id)) {
			setFilters(filters.filter(filter => filter !== id));
		} else {
			setFilters([...filters, id]);
		}
	}
	const handleClearFilters = () => {
		setFilters([]);
	}
  return (
    <div className="absolute top-[160px] md:top-[60px] right-[4px] max-w-sm px-4">
      	<Popover className="relative">
			{({close, open}) => (
				<>
					<div className="relative z-10">
						<SimpleTransition show={filters.length > 0}>
							{filters.length > 0 && <button className="absolute right-[50px] top-[0px] inline-flex border-[2px] border-[#8DA9C4] text-[#8DA9C4] items-center p-[10px] rounded-[30px] 
							transition-colors duration-200 ease-in-out hover:text-[#8DA9C4]/70 hover:border-[#8DA9C4]/70 focus:outline-none" onClick={handleClearFilters}>
								<FaRegTrashAlt className="w-[18px] h-[18px]" />
							</button>}
						</SimpleTransition>
					</div>
					<Popover.Button
					className="relative z-10
						group inline-flex border-[2px] border-black items-center p-[10px] rounded-[30px] 
						transition-colors duration-200 ease-in-out hover:text-[#8DA9C4]/70 hover:border-[#8DA9C4]/70 focus:outline-none"
					>
						<SimpleTransition 
							show={filters.length > 0}
						>
							{filters.length > 0 && <div className="absolute transition-colors duration-200 ease-in-out font-medium top-[-7px] right-[-7px]
							 bg-[#8DA9C4] w-[20px] h-[20px] rounded-[10px] text-center text-[14px] leading-[20px] text-black group-hover:text-white">
								{filters.length}
							</div>}
						</SimpleTransition>
						<BsSliders className="w-[18px] h-[18px]" />
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute right-0 mt-[20px] z-10 w-screen max-w-sm md:max-w-[600px] transform pl-[40px] md:pl-0">
							{createPortal(
								<Transition
								enter="transition ease-out duration-500"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="transition ease-in duration-500"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								{open &&<div onClick={() => close()} className="bg-black/60 w-[100vw] h-[100svh] md:h-[100vh] fixed top-0 left-0"></div>}
							</Transition>, document.body)}
							<div className="overflow-hidden rounded-[10px] shadow-lg ring-1 ring-black/5">
								<div className="overflow-scroll relative grid gap-8 bg-white p-7 md:grid-cols-3 max-h-[calc(100svh-240px)] md:max-h-[calc(100vh-140px)]">
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
													<TagButton key={techStack.id} id={techStack.id} name={techStack.name} image={techStack.image} handleClick={handleFilterClicked} isSelected={filters.includes(techStack.id)} />
												))}
											</div>
										</React.Fragment>
									))}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
      	</Popover>
    </div>
  )
}
