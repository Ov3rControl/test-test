import Axios, { AxiosResponse } from "axios";
import React, { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
// import { useImmer } from "use-immer";
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

  const RateRepo = (id: number) => {
    const newList = replaceItemAtIndex(repoList, id, {
      ...item,
      text: value,
    });

    setRepoList(newList);
  };

  useEffect(() => {
    fetchLatestRepoData();
    return () => {
      source.cancel();
    };
  }, [fetchLatestRepoData, source]);

  return <HomeView />;
};

function replaceItemAtIndex(
  arr: RepoDataType[],
  id: number,
  newValue: RepoDataType
) {
  return [...arr.slice(0, id), newValue, ...arr.slice(id + 1)];
}
