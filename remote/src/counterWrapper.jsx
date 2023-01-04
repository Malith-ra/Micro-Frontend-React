import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
