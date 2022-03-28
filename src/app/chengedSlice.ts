import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface componentI {
   component:string;
} 

const initialState: componentI = {
   component:'',
};

export const chengedSlice = createSlice({
   name:'chenged',
   initialState, 
   reducers: {
      chengedComponent: (state, action: PayloadAction<string>) => {
         state.component = action.payload;
      }
   }
});
export const { 
   chengedComponent
} = chengedSlice.actions

export default chengedSlice.reducer;