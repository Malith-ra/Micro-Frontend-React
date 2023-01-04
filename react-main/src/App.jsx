import React from "react";
import ReactDOM from "react-dom";

import CounterWrapper from "remote/counterWrapper";

import "./index.scss";

const App = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 text-3xl">
      <div>Name: react-host</div>
      <CounterWrapper />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
