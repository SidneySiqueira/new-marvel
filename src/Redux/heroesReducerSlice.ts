import { HeroesProps } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HeroesProps = {
  heroes: [
    {
      id: 0,
      name: "",
      thumbnail: {
        path: "",
        extension: "",
      },
    },
  ],
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes(state, action: PayloadAction<any>) {
      state.heroes = action.payload;
    },
  },
});

export const { setHeroes } = heroesSlice.actions;

export default heroesSlice.reducer;
