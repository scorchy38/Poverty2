import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./PageHelper/Header";
import ErrorPage from "./core/ErrorPage";
import Home from "./core/Home";
import About from "./core/About";
import Program from "./core/Program";
import Contact from "./core/Contact";
import Gallery from "./core/Gallery";
import Blog from "./core/Blogs";
import Involved from "./core/Involve";
import Cause from "./core/Cause";
import Concert from "./core/Concert";
import Curriculum from "./core/Curriculum";
import Studplay from "./core/Studplay";
import Slum from "./core/Slum";
import Exp from "./core/Explore";
import Location from "./core/Location";
import Ourvision from "./core/Ourvision";
import Partner from "./core/Partner";
import Signup from "./core/SignUp";
import Contribute from "./core/Contribute";
import Page from "./core/Progcomb";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/IDRPregistration" component={IDRP} />
          <Route exact path="/about us" component={About} />
          <Route exact path="/programs" component={Program} />
          <Route exact path="/contact us" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/blogs" component={Blog} />
          <Route exact path="/concert" component={Concert} />
          <Route exact path="/cause" component={Cause} />
          <Route exact path="/curriculum" component={Curriculum} />
          <Route exact path="/involve" component={Involved} />
          <Route exact path="/studplay" component={Studplay} />
          <Route exact path="/slum" component={Slum} />
          <Route exact path="/our/location" component={Location} />
          <Route exact path="/blog/:id" component={Exp} />
          <Route exact path="/our/vision" component={Ourvision} />
          <Route exact path="/sign/up" component={Signup} />
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/all/program" component={Page} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  function IDRP() {
    return window.open("https://forms.gle/UQojGZwRcjd9d6sn8", "_self");
  }
};

export default App;
