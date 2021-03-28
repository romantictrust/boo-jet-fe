import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Not found</h2>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}
