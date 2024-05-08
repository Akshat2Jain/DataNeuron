import React from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout"; // Importing components from react-resize-layout library
import "./App.css";

const App = () => {
  return (
    <>
      <Resize>
        <ResizeVertical height="50%">
          <Resize handleWidth="3px">
            <ResizeHorizon width="50%">
              <Component1 />
            </ResizeHorizon>

            <ResizeHorizon width="50%">
              <Component2 />
            </ResizeHorizon>
          </Resize>
        </ResizeVertical>

        <ResizeVertical height="50%" minHeight="100px">
          <Resize>
            <Component3 />
          </Resize>
        </ResizeVertical>
      </Resize>
    </>
  );
};

export default App;
