import { ComicsProps } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ComicsProps = {
  comics: [
    {
      title: "",
      description: "",
      thumbnail: {
        path: "",
        extension: "",
      },
    },
  ],
};

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    setComics(state, action: PayloadAction<any>) {
      state.comics = action.payload;
    },
  },
});

export const { setComics } = comicsSlice.actions;

export default comicsSlice.reducer;
