import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className='app'>
      <h2>App</h2>
      <div className='page'>{useRoutes(routes)}</div>
    </div>
  );
});

export default App;
