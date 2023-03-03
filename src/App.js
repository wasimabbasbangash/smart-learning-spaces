import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Library from "./pages/Library";
import ABuilding from "./pages/ABuilding";
import BBuilding from "./pages/BBuilding";
import DBuilding from "./pages/DBuilding";
import EBuilding from "./pages/EBuilding";
import FBuilding from "./pages/FBuilding";
import GBuilding from "./pages/GBuilding";
import HBuilding from "./pages/HBuilding";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App bg-white flex flex-row justify-start overflow-y-hidden overflow-x-clip flex-wrap relative'>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />}>
              Dashboard
            </Route>
            <Route path='/library' element={<Library />}>
              Library
            </Route>
            <Route path='/a-block' element={<ABuilding />}>
              A Building
            </Route>
            <Route path='/b-block' element={<BBuilding />}>
              B Building
            </Route>
            <Route path='/d-block' element={<DBuilding />}>
              D Building
            </Route>
            <Route path='/e-block' element={<EBuilding />}>
              E Building
            </Route>
            <Route path='/f-block' element={<FBuilding />}>
              F Building
            </Route>
            <Route path='/g-block' element={<GBuilding />}>
              G Building
            </Route>
            <Route path='/h-block' element={<HBuilding />}>
              H Building
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
