import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/ontact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
