import { EventsProps } from "@/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EventsProps = {
  events: [
    {
      title: "",
      description: "",
      start: "",
      end: "",
      thumbnail: {
        path: "",
        extension: "",
      },
    },
  ],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<any>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
