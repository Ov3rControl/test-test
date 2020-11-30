import { selector } from "recoil";
import { repoListFilterState, repoListState } from "../atoms/atom";

export const filteredRepoListState = selector({
  key: "filteredRepoListState",
  get: ({ get }) => {
    const filter = get(repoListFilterState);
    const list = get(repoListState);

    switch (filter) {
      case "Show All":
        return list;
      case "Show Starred Only":
        return JSON.parse(localStorage.getItem("starredRepoList") || "[]");
      default:
        return list;
    }
  },
});
