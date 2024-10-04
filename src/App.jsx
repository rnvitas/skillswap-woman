import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/LandingPage/Landing'
import Login from './components/Login'
import Wrapper from './components/Parts/Wrapper'
import WrapperLogin from './components/Parts/WrapperLogin'
import WrapperUser from './components/Parts/WrapperUser'
import Regist from './components/Regist'
import Keterampilan from './components/Keterampilan/Keterampilan'
import FormSwap from './components/Keterampilan/FormSwap'
import FormPosting from './components/Keterampilan/FormPosting'
import SkillsSwap from './components/Pertukaran/SkillsSwap'
import DetailPosting from './components/Keterampilan/DetailPosting'
import DetailSwap from './components/Pertukaran/DetailSwap'

function App() {

  return (
    <>
 

    <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Landing />} />
        </Route>

        <Route path="/" element={<WrapperLogin/>}>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Regist />} />
                {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
   

      <Route path="/" element={<WrapperUser/>}>
          {/* <Route path="/home" element={<Login/>} /> */}
          <Route path="/skills" element={<Keterampilan />} />
          <Route path="/skillsswap" element={<SkillsSwap />} />


      </Route>

      <Route path="/formswap" element={<FormSwap/>} />
      <Route path="/formskills" element={<FormPosting/>} />
      <Route path="/detailskills/:id_post" element={<DetailPosting/>} />
      <Route path="/detailswap/:id_post" element={<DetailSwap/>} />





      </Routes>

    </>
  )
}

export default App
