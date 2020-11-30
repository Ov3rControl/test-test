import React, { FunctionComponent } from "react";
import { RepoDataType } from "../../types";
import { RepoCard } from "../../sharedComponents/Card";
import styles from "./Home.view.module.css";
import { useRecoilValue } from "recoil";
import { repoListState } from "../../store/atoms/atom";
import Button from "react-bootstrap/esm/Button";

type Props = {
  rateRepo: (id: number) => void;
};

export const HomeView: FunctionComponent<Props> = ({
  rateRepo,
}: Props): JSX.Element => {
  const repoList = useRecoilValue<RepoDataType[]>(repoListState);

  return (
    <div className={styles.container}>
      <Button>{"Show Starred Only"}</Button>
      {repoList?.map((item) => {
        const { id, name, url, stargazers_count, starred } = item;
        return (
          <>
            <RepoCard
              key={id}
              id={id}
              name={name}
              url={url}
              stargazers_count={stargazers_count}
            />
            <Button disabled={starred} onClick={() => rateRepo(id)}>
              {starred ? "Stared" : "Star"}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default React.memo(HomeView);
