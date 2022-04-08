import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TopBar} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./modules/main/MainPage";
import {GamesPage} from "./modules/games/GamesPage";
import {CertainGamePage} from "./modules/certain-game/CertainGamePage";
import {AssetsPage} from "./modules/assets/AssetsPage";
import {LibraryPage} from "./modules/library/LibraryPage";
import {MarketplacePage} from "./modules/marketplace/MarketplacePage";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="main-wrapper">
        <TopBar/>
        <Routes>
          <Route path="library" element={<App/>}/>
          <Route path="games" element={<GamesPage/>}>
            <Route path=":gameId" element={<CertainGamePage/>}/>
          </Route>
          <Route path="assets" element={<AssetsPage/>}/>
          {/*<Route path="library" element={<LibraryPage/>}/>*/}
          <Route path="marketplace" element={<MarketplacePage/>}/>
          <Route path="profile" element={<MarketplacePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
