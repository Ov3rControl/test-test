import React, { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import Button from "react-bootstrap/esm/Button";
import { RepoDataType } from "../../types";
import { RepoCard } from "../../sharedComponents/Card";
import styles from "./Home.view.module.css";
import { RepoListFilters } from "./component/ItemFilter";
import { filteredRepoListState } from "../../store/selectors/selectors";

type Props = {
  rateRepo: (id: number) => void;
};

export const HomeView: FunctionComponent<Props> = ({
  rateRepo,
}: Props): JSX.Element => {
  const repoList = useRecoilValue<RepoDataType[]>(filteredRepoListState);

  return (
    <div className={styles.container}>
      <RepoListFilters />
      {repoList?.map((item) => {
        const { id, name, url, stargazers_count, starred } = item;
        return (
          <>
            <RepoCard
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
