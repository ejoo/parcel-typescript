import * as React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="flex">
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/services">Services</Link>
    </p>
    <p>
      <Link to="/posts">Posts</Link>
    </p>
  </div>
);
