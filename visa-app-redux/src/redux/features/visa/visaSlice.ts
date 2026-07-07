import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { VisaApplication } from "../../../types/visa";

interface VisaState {
  applications: VisaApplication[];
}

const initialState: VisaState = {
  applications: [],
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<VisaApplication>) => {
      state.applications.push(action.payload);
    },

    deleteApplication: (state, action: PayloadAction<number>) => {
      state.applications = state.applications.filter(
        (app) => app.id !== action.payload,
      );
    },
  },
});

export const { addApplication, deleteApplication } = visaSlice.actions;

export default visaSlice.reducer;
