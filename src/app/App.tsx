import React from 'react';
import Home from "../components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "../utils/router/privateRouter";
import AuthComponent from "../components/auth";

function App() {
  return (
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
  );
}

export default App;
