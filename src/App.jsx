import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
} from "./components";
import Campaigns from "./pages/Campaigns"
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignTypes from "./pages/CampaignTypes";
import CampaignGoals from "./pages/CampaignGoals";
import CampaignMedia from "./pages/CampaignMedia";
const LandingPage=()=>{
  return (
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
      </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/campaigns" element={<Campaigns/>}/>
        <Route path="/create/fundraiser" element={<CreateCampaign/>}/>
        <Route path="/create/fundraiser/media" element={<CampaignMedia/>}/>
        <Route path="/create/fundraiser/types" element={<CampaignTypes/>}/>
        <Route path="/create/fundraiser/goal" element={<CampaignGoals/>}/>
      {/* <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
      </div> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
