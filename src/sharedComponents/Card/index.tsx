import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { RepoDataType } from "../../types";
import styles from "./index.module.css";

export const RepoCard: FunctionComponent<RepoDataType> = ({
  id,
  name,
  url,
  stargazers_count,
}: RepoDataType): JSX.Element => {
  return (
    //*TODO* solve bootstrap weird keys issue
    <Card key={id} className={styles.container}>
      <Card.Header>
        <div className={styles.cardHeader}>
          <p>{name}</p>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item href={url}>{url}</ListGroup.Item>
        <ListGroup.Item>{stargazers_count}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
