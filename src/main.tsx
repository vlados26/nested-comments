import React from "react";
import ReactDOM from "react-dom/client";
import { default as NestedComments } from "./Nested/Comments";
import { default as FlatComments } from "./Flat/Comments";
import { default as NestedAsFlatComments } from "./NestedAsFlat/Comments";
import { comments as nestedAsFlatComments } from "./NestedAsFlat/constants";
import { rootComments as flatRootComments } from "./Flat/constants";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h2>Flat Comments</h2>
    <FlatComments comments={flatRootComments} />
    <hr />
    <h2>Nested Comments</h2>
    <NestedComments />
    <hr />
    <h2>Nested (with same logic as flat) Comments</h2>
    <NestedAsFlatComments comments={nestedAsFlatComments} />
  </React.StrictMode>
);
