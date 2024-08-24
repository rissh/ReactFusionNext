import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Active Sprint</h1>
      </div>
      <div className="actions">
        <button className="complete_sprint_button">Complete Sprint</button>
        <button className="more_options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
