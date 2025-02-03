import "./App.css";
import Chores from "./sections/Chores.js";
import Contact from "./sections/Contact.js";
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
      <Contact />
    </>
  );
}

export default App;
