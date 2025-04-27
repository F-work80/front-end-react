import React from 'react';
import Home from "../components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "../utils/router/privateRouter";
import AuthComponent from "../components/auth";
import {ColorModeContext,useMode} from "../theme";
import {ThemeProvider,CssBaseline} from "@mui/material";
import LayoutComponent from "../components/layout";

function App() {
    const [colorMode,theme]=useMode()

  return (
      <ColorModeContext.Provider value={colorMode } >
          <ThemeProvider theme={theme}>
              <CssBaseline />
                  <LayoutComponent>
                    <div className="App">
                      <header className="App-header">
                          <Routes>
                              <Route element={<PrivateRouter/>}>
                                  <Route  path='/' element={<Home  />}  />
                              </Route>
                              <Route path='register' element={<AuthComponent/>} />
                              <Route path='login' element={<AuthComponent/>} />
                          </Routes>
                      </header>
                    </div>
                   </LayoutComponent>
           </ThemeProvider>
       </ColorModeContext.Provider>
  );
}

export default App;
