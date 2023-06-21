import { HeroSelect } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeroSelect = {
  heroeSelect: {
    id: 0,
    name: "",
    description: "",
    thumbnail: {
      path: "",
      extension: "",
    },
    urls: [
      {
        type: "",
        url: "",
      },
    ],
  },
};

const heroeSelectSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroeSelect(state, action: PayloadAction<any>) {
      state.heroeSelect = action.payload;
    },
  },
});

export const { setHeroeSelect } = heroeSelectSlice.actions;

export default heroeSelectSlice.reducer;
