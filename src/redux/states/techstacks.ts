import { createSlice } from "@reduxjs/toolkit";
import { TechStack } from "../../models";
import { TechStackData } from "../../data/techstacks";

export const InitialTechStacksState : TechStack[] = TechStackData;

export const techStacksSlice = createSlice({
  name: 'techstacks',
  initialState: InitialTechStacksState,
  reducers: {
    createTechStacks: (_, action) => {
      return action.payload;
    },
  }
});

export const { createTechStacks } = techStacksSlice.actions;

export default techStacksSlice.reducer;