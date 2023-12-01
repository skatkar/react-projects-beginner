import Github from "./components/Github/Github";
import Accordian from "./components/Accordian/Accordian";
import Carousal from "./components/Carousal/Carousal";
import Quotes from "./components/Quote/Quotes";
import Shopping from "./components/Shopping/Shopping";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import BmiCalc from "./components/BmiCalc/BmiCalc";
import ThemeProvider from "./store/ThemeProvider";
import ThemeChange from "./components/ThemeChange/ThemeChange";
import EscapeJSON from "./components/EscapeJSON/EscapeJSON";

// First project
/*
function App() {
  return <Carousal />;
}
*/

// Second project
/*
function App() {
  return <Accordian />;
}
*/

// Third project
/*
function App() {
  return <Quotes />;
}
*/

// Fourth project
/*
function App() {
  return <Shopping />;
}
*/

// Fifth project
/*
function App() {
  return <Github />;
}
*/

// Sixth project
/*
function App() {
  return <VideoPlayer />;
}
*/

// Seventh project
/*
function App() {
  return <BmiCalc />;
}
*/

// Context API - Theme change
/*
function App() {
  return (
    <ThemeProvider>
      <ThemeChange />
    </ThemeProvider>
  );
}

*/

function App() {
  return <EscapeJSON />;
}
export default App;
