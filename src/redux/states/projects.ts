import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../../models";
import { ProjectsData } from "../../data/projects";

export const InitialProjectsState : Project[] = ProjectsData;

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: InitialProjectsState,
  reducers: {
    createProjects: (_, action) => {
      return action.payload;
    },
  }
});

export const { createProjects } = projectsSlice.actions;

export default projectsSlice.reducer;