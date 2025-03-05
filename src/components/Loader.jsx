import React from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <div>
      <div className="loader">
        <span className="loader-text"></span>
        <span className="load" />
      </div>
    </div>
  );
}
