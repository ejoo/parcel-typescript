import * as React from "react";

export default ({ post }) => {
  const { id, title, body } = post;

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};
