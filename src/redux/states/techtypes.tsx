import { createSlice } from "@reduxjs/toolkit";
import { CgWebsite } from "react-icons/cg";
import { FiServer, FiSmartphone, FiCode, FiDatabase, FiBox, FiCloud } from "react-icons/fi";
import { BiSolidBrushAlt } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { LuPackageOpen } from "react-icons/lu";
import { TbRefresh, TbDeviceHeartMonitor, TbTestPipe, TbBooks, TbDots } from "react-icons/tb";
import { RiOrganizationChart } from "react-icons/ri";
import { TechTypeModel, techType } from "../../models";

const iconsMap = {
	'Frontend': <CgWebsite className="w-[20px] h-[20px]" />,
	'Backend': <FiServer className="w-[20px] h-[20px]" />,
	'Mobile': <FiSmartphone className="w-[20px] h-[20px]" />,
	'Programming Language': <FiCode className="w-[20px] h-[20px]" />,
	'Database': <FiDatabase className="w-[20px] h-[20px]" />,
	'Styling': <BiSolidBrushAlt className="w-[20px] h-[20px]" />,
	'Design': <HiOutlinePencil className="w-[20px] h-[20px]" />,
	'Version Control': <TbRefresh className="w-[20px] h-[20px]" />,
	'Package Manager': <FiBox className="w-[20px] h-[20px]" />,
	'Bundler': <LuPackageOpen className="w-[20px] h-[20px]" />,
	'Cloud': <FiCloud className="w-[20px] h-[20px]" />,
	'DevOps': <TbDeviceHeartMonitor className="w-[20px] h-[20px]" />,
	'Testing': <TbTestPipe className="w-[20px] h-[20px]" />,
	'Libraries': <TbBooks className="w-[20px] h-[20px]" />,
	'CMS': <RiOrganizationChart className="w-[20px] h-[20px]" />,
	'Other': <TbDots className="w-[20px] h-[20px]" />,
}

export const InitialTechTypesState  : TechTypeModel[] = Object.values(techType).map(techType => ({ name: techType, icon : iconsMap[techType]}));
export const techTypesSlice = createSlice({
  name: 'techtypes',
  initialState: InitialTechTypesState,
  reducers: {
    createTechTypes: (_, action) => {
      return action.payload;
    },
  }
});

export const { createTechTypes } = techTypesSlice.actions;

export default techTypesSlice.reducer;