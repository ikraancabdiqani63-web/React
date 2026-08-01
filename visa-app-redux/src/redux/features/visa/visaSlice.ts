import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface VisaSFormData {
  FullName: string;
  Passport: string;
  Country: string;
  VisaType: string;
}

const initialState: VisaSFormData = {
  FullName: "",
  Passport: "",
  Country: "",
  VisaType: "",
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<Partial<VisaSFormData>>) => {
      return { ...state, ...action.payload };
    },

    deleteApplication: () => {
      return initialState;
    },
  },
});

export const { addApplication, deleteApplication } = visaSlice.actions;

export default visaSlice.reducer;
