import "./App.css";
import Chores from "./sections/Chores.js";
import Intro from "./sections/Intro.js";
import LandingBanner from "./sections/LandingBanner.js";
import Planning from "./sections/Planning.js";
function App() {
  return (
    <>
      <LandingBanner />
      <Intro />
      <Planning />
      <Chores />
    </>
  );
}

export default App;
