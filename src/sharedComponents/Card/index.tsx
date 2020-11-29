import React, { FunctionComponent } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { RepoDataType } from "../../types";
import styles from "./index.module.css";

export const RepoCard: FunctionComponent<RepoDataType> = ({
  id,
  name,
  url,
  stargazers_count,
  starred,
}: RepoDataType): JSX.Element => {
  return (
    <Card key={id} className={styles.container}>
      <Card.Header>
        <div className={styles.cardHeader}>
          <p>{name}</p>
          <Button disabled={starred} variant="warning">
            {starred ? "Starred" : "Star"}
          </Button>
        </div>
      </Card.Header>
      <ListGroup key={id} variant="flush">
        <ListGroup.Item href={url}>{url}</ListGroup.Item>
        <ListGroup.Item>{stargazers_count}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
