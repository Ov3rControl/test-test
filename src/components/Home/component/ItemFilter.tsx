import React from "react";
import { useRecoilState } from "recoil";
import { repoListFilterState } from "../../../store/atoms/atom";

export const RepoListFilters = () => {
  const [filter, setFilter] = useRecoilState(repoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Starred Only">Show Starred Only</option>
      </select>
    </>
  );
};
