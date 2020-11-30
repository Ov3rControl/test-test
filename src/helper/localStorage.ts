import { RepoDataType } from "../types";

export const saveRepoToLocalStorage = (item: RepoDataType) => {
  //*TODO* prevent saving same item id twice
  const fetchStarredRepoList1 = JSON.parse(
    localStorage.getItem("starredRepoList") || "[]"
  );
  fetchStarredRepoList1.push(item);
  localStorage.setItem(
    "starredRepoList",
    JSON.stringify(fetchStarredRepoList1)
  );
};
