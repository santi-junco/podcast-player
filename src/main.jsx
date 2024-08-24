import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./componentes/Header";
import { PlayBar } from "./componentes/PlayBar";
import { Home } from "./componentes/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Home />
    <PlayBar />
  </>
);
