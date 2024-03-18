import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";
import Resume from "./portfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
    </div>
  );
}

export default App;
