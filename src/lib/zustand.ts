import { create } from "zustand";

interface State {
  searchText: string;
  setSearchText: (input: string) => void;
}

const useSearchText = create<State>((set) => ({
  searchText: "",
  setSearchText: (input) =>
    set({
      searchText: input,
    }),
}));

export { useSearchText };
