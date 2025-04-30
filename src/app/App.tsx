import React from 'react';
import Home from "../components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "../utils/router/privateRouter";
import AuthComponent from "../components/auth";
import {ColorModeContext,useMode} from "../theme";
import {ThemeProvider,CssBaseline} from "@mui/material";
import LayoutComponent from "../components/layout";
import WatchListComponent from "../components/wtchlist";
import NewsComponent from "../components/news";
import SettingsComponent from "../components/settings";

function App() {
    const [colorMode,theme]=useMode()

  return (
      <ColorModeContext.Provider value={colorMode } >
          <ThemeProvider theme={theme}>
              <CssBaseline />
                    <div className="App">
                      <header className="App-header">
                          <Routes>
                              <Route element={<LayoutComponent/>}>
                                  <Route element={<PrivateRouter/>}>
                                      <Route  path='/' element={<Home  />}  />
                                      <Route  path='/watchList' element={<WatchListComponent  />}  />
                                      <Route  path='/news' element={<NewsComponent  />}  />
                                      <Route  path='/settings' element={<SettingsComponent  />}  />
                                  </Route>
                                  <Route path='register' element={<AuthComponent/>} />
                                  <Route path='login' element={<AuthComponent/>} />
                              </Route>
                          </Routes>
                      </header>
                    </div>
           </ThemeProvider>
       </ColorModeContext.Provider>
  );
}

export default App;
