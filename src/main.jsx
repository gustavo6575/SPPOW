import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoadingPG from './pages/LoadingPage';
import RPSInfoChar from './pages/RegPagInfoPess';
import RegPagInfoAddress from './pages/RegPagInfoAddress';
import RegPagInfoLogin from './pages/RegPagInfoLogin';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoadingPG />} />
      <Route path="/loginPage" element={<LoadingPG />} />
      <Route path="/RegisterPagePes" element={<RPSInfoChar />} />
      <Route path="/RegisterPageAddress" element={<RegPagInfoAddress />} />
      <Route path="/RegisterPageLogin" element={<RegPagInfoLogin />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);