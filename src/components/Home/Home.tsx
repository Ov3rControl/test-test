import Axios, { AxiosResponse } from "axios";
import React, { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import { saveRepoToLocalStorage } from "../../helper/localStorage";
import { repoListState } from "../../store/atoms/atom";
import { RepoDataType } from "../../types";
import HomeView from "./Home.view";

const { useEffect, useCallback } = React;

export const Home: FunctionComponent = (): JSX.Element => {
  //*TODO* Immer for string shallow comparison
  // const [state, setState] = useImmer<RepoDataType[]>([]);
  const [repoList, setRepoList] = useRecoilState<RepoDataType[]>(repoListState);

  const source = Axios.CancelToken.source();
  const fetchLatestRepoData = useCallback(() => {
    try {
      Axios.get(
        "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc",
        {
          cancelToken: source.token,
        }
      ).then((res: AxiosResponse) => {
        setRepoList(res.data.items);
      });
    } catch (error) {
      if (Axios.isCancel(error)) {
      } else {
        throw error;
      }
    }
  }, [setRepoList, source.token]);

  const rateRepo = (id: number) => {
    const items = repoList.filter((item) => item.id === id);
    const singleItem = items[0];
    const index = repoList.findIndex((listItem) => listItem === singleItem);
    const starredRepo = {
      ...singleItem,
      stargazers_count: singleItem.stargazers_count + 1,
      starred: true,
    };
    const newList = replaceItemAtIndex(repoList, index, starredRepo);
    console.log(singleItem);
    console.log(starredRepo);
    setRepoList(newList);
    saveRepoToLocalStorage(starredRepo);
  };

  useEffect(() => {
    fetchLatestRepoData();
    return () => {
      source.cancel();
    };
  }, []);

  return <HomeView rateRepo={rateRepo} />;
};

function replaceItemAtIndex(
  arr: RepoDataType[],
  id: number,
  newValue: RepoDataType
) {
  return [...arr.slice(0, id), newValue, ...arr.slice(id + 1)];
}
