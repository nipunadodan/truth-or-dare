import React from 'react';

import "./assets/fonts/css/line-awesome.min.css"
import {ThemeProvider} from "./components/Common/ThemeContext";
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter basename={'truth-or-dare'}>
              <Routes>
                  <Route path={'/'} element={<Home />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
