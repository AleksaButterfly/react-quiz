import React from "react";
import routeConfigration from "./routeConfiguration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {routeConfigration().map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
