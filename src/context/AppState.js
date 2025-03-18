import { AppContext } from "./AppContext";
import React, { useState } from "react";
const AppState = (props) => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <AppContext.Provider value={{ sidebar, setSidebar}}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
