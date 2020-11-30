import { atom, RecoilState } from "recoil";
import { RepoDataType } from "../../types";

const initalAppData = {
  id: 0,
  name: "",
  url: "",
  stargazers_count: 0,
};

export const repoListState: RecoilState<RepoDataType[]> = atom({
  key: "repoListState",
  default: [initalAppData],
});

export const repoListFilterState = atom({
  key: "repoListFilterState",
  default: "Show All",
});
