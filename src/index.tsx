import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DataContextProvider } from './context';
import { Salon, ListView } from './pages';
import GlobalStyles from "./globalStyles";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <DataContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/salon/:salonId" element={<Salon />} />
        </Routes>
      </HashRouter>
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
