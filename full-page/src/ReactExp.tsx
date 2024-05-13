import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ReactExp.css";

function ReactExp() {
  return (
    <div className="react-container">
      <h1>Welcome to the React Info Page!</h1>
      <div className="text">
        <p>
          React is a framework that combines HTML, CSS, and JS to allow for the
          creation and programming of flexible webpages and websites
        </p>
        <p>
          It is created by Meta and can be used to develop single-page, mobile,
          and server-rendered applications
        </p>
        <p>
          {" "}
          In our time with React, we have learned the funamental concepts for
          building pages, including:
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Flex styling and bootstrap applications
        </li>
        <li className="list-group-item">Classes and Functions</li>
        <li className="list-group-item">Prop States</li>
        <li className="list-group-item">Mapping</li>
        <li className="list-group-item">Components</li>
        <li className="list-group-item">
          Combination of Componenets in to App.js/App.tsx
        </li>
        <li className="list-group-item">Use of tsx file type</li>
        <li className="list-group-item">
          use of npm and yarn for task management
        </li>
        <li className="list-group-item">BEM naming conventions</li>
      </ul>
    </div>
  );
}

export default ReactExp;
