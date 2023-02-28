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

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App bg-white relative flex flex-row justify-start overflow-y-scroll overflow-x-clip flex-wrap relative'>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/library' element={<Library />}>
              Aspect Scores
            </Route>
            <Route path='/a-block' element={<ABuilding />}>
              Bench Mark
            </Route>
            <Route path='/b-block' element={<BBuilding />}>
              Time Series
            </Route>
            <Route path='/d-block' element={<DBuilding />}>
              Driver Analysis
            </Route>
            <Route path='/e-block' element={<EBuilding />}>
              Aspect Analysis
            </Route>
            <Route path='/f-block' element={<FBuilding />}>
              Aspect Analysis
            </Route>
            <Route path='/g-block' element={<GBuilding />}>
              Aspect Analysis
            </Route>
            <Route path='/h-block' element={<HBuilding />}>
              Aspect Analysis
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
