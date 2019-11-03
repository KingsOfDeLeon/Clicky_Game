import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul>
        <li>
            <a className="navbar-brand" href="/"> Clicky Game</a>
        </li>
        <li>
            Click an image to begin!
        </li>
        <li>
            Score: {scoreVariableHere} | Top Score: {TopScoreVariableHere}
        </li>
    </ul>
    </nav>
  );
}

export default Nav;
