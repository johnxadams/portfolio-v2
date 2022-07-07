// library
import React from "react";

//components
import GifContainer from "./GifContainer";

//styles
import "./App.css";
import { worksArr } from "./data";

function App() {
  return (
    <div className="App">
      <GifContainer worksArr={worksArr}/>
    </div>
  );
}

export default App;
