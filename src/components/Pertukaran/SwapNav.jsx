import { Link, Route, Routes } from "react-router-dom";
import SkillsSwap from "./SkillsSwap";

function SwapNav() {
  return (
    <>
      <div className="wrapper container py-5 flex gap-5 justify-center items-center">
        <Routes>
          <Route path="/skillswap" element={<SkillsSwap />} />
          <Route path="/skillsswap/receiveswap" element={<SkillsSwap  />} />
          <Route path="/skillsswap/requestswap" element={<SkillsSwap />} />
        </Routes>

        <Link to="/skillsswap/receiveswap">
          <button className="lg-btn-secondary">Permintaan Diterima</button>
        </Link>

        <Link to="/skillsswap/requestswap">
          <button className="lg-btn-secondary-stroke">Permintaan Diajukan</button>
        </Link>
      </div>
    </>
  );
}

export default SwapNav;
