import { configureStore } from "@reduxjs/toolkit";
import { Author, Project, TechStack, TechTypeModel } from "../models";
import authorSliceReducer from "./states/author";
import projectsSliceReducer from "./states/projects";
import techStacksSliceReducer from "./states/techstacks";
import techTypesSliceReducer from "./states/techtypes";

export interface AppStore {
	author : Author;
	projects: Project[];
	techstacks: TechStack[];
	techtypes: TechTypeModel[];
}

export default configureStore<AppStore>({
	reducer: {
		author: authorSliceReducer,
		projects: projectsSliceReducer,
		techstacks: techStacksSliceReducer,
		techtypes: techTypesSliceReducer,
	}
});