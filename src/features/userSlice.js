import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "crud",
  initialState: {
    value: UsersData,
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    userUpdate: (state, action) => {
      state.value.map((user) => {
     
            if(user.id === action.payload.id){

                user.username = action.payload.username;
            }
         
       
      });
    },

    userDelete: (state, action) => {
      state.value = state.value.filter(
        (filter) => filter.id !== action.payload.id
      );
    },
  },
});

export const { addItem, userUpdate , userDelete } = userSlice.actions;
export default userSlice.reducer;
