import { RepoDataType } from "../types";

export const saveRepoToLocalStorage = (item: RepoDataType) => {
  //*TODO* prevent saving same item id twice
  const fetchStarredRepoList = JSON.parse(
    localStorage.getItem("starredRepoList") || "[]"
  );
  fetchStarredRepoList.push(item);
  localStorage.setItem("starredRepoList", JSON.stringify(fetchStarredRepoList));
};
