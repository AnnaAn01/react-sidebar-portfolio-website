import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import MyCv from "./components/pages/MyCv";
import Blog from "./components/pages/Blog";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/about" exact component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/mycv" component={MyCv} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactMe" component={ContactMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
