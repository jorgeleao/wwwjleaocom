import React from "react";
import { Route, Switch } from 'react-router-dom';
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import "./BasePage.css";

import Home from "./Home.js";
import About from "./About.js";
import Blog from "./Blog.js";
import Projects from "./Projects.js";

function BasePage(){
    return(
    <div className='BasePage'>
        <Menu />

        <Switch>
            <Route path="/" component={Home} exact='true' />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
        </Switch>

        <Footer />
    </div>
    )
}

export default BasePage;