import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface passportFormData {
  FullName: string;
  PassportNumber: string;
  Country: string;
  expiryDate: string;
}

const initialState: passportFormData = {
  FullName: "",
  PassportNumber: "",
  Country: "",
  expiryDate: "",
};

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<Partial<passportFormData>>) => {
      return { ...state, ...action.payload };
    },

    deleteApplication: () => {
      return initialState;
    },
  },
});

export const { addApplication, deleteApplication } = passportSlice.actions;

export default passportSlice.reducer;
