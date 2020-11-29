import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;
