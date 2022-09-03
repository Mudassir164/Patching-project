import CopyRight from "./Component/CopyRight";
import Footer from "./Component/Footer";
import TopNavbar from "./Component/TopNavbar";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./Screens/MainScreen/HomeScreen";
import Digitizing from "./Screens/MainScreen/Digitizing";
import EmboridreedPatches from "./Screens/MainScreen/EmboridreedPatches";
import LeatherPatches from "./Screens/MainScreen/LeatherPatches";
import PVCpatch from "./Screens/MainScreen/PVCpatch";
import SublimationPatch from "./Screens/MainScreen/SublimationPatch";
import Navbar from "./Component/Navbar";
function App() {
  // HEAD
  console.log("checking request");

  return (
    <Router>
      <div className="App relative  w-[100%] flex flex-col">
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/digitizing-patch" element={<Digitizing />} />
          <Route
            exact
            path="/emboridreed-patch"
            element={<EmboridreedPatches />}
          />
          <Route exact path="/leather-patch" element={<LeatherPatches />} />
          <Route exact path="/pvc-patch" element={<PVCpatch />} />
          <Route
            exact
            path="/sublimation-patch"
            element={<SublimationPatch />}
          />
        </Routes>
        <Footer />
        <CopyRight />
      </div>
    </Router>
  );
}

export default App;
