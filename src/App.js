import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";
import Resume from "./portfolioContainer/Resume/Resume";
import Project from "./portfolioContainer/Projects/Project";

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
      <Project/>
    </div>
  );
}

export default App;
