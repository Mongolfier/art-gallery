import {
  Routes,
  Route,
} from "react-router-dom";

import Animations from "../Pages/Animations/Animations";
import Illustrations from "../Pages/Illustrations/Illustrations";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Illustrations />} />
      <Route path="animations" element={<Animations />} />
    </Routes>
  );
}

export default Router;