import React, { useState } from "react";
import "./Terminal.css";

function Terminal() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="terminal-container">
      <h1>Welcome to the Terminal Info Page!</h1>
      <p>
        The terminal is a interface to the computer. Here, you can type
        commands, handle files, execute programs among other things. In short,
        the Terminal is a way to communicate with the computer in a more precise
        way.
      </p>
      <ul>
        <li>Execute commands to perform tasks efficiently.</li>
        <li>Access and navigate files and directories.</li>
        <li>Automate tasks using scripts and command-line tools.</li>
      </ul>
      {showDetails && (
        <div className="details-section">
          <p>
            The terminal offers powerful features such as piping, redirection,
            and scripting, allowing users to manipulate data and automate
            complex workflows.
          </p>
          <p>
            Explore more about terminals and command-line interfaces at{" "}
            <a
              href="https://en.wikipedia.org/wiki/Command-line_interface"
              target="_blank"
              rel="noopener noreferrer"
            >
              their Wikipedia page
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}

export default Terminal;
