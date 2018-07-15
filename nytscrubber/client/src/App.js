import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" 
import TitleBox from "./components/titlebox"


import SearchBox from './components/searchbox/searchbox';
import './App.css';


const App = () =>

  <Router>

    <div>
      <TitleBox/>
      <Route exact path="/" component={SearchBox} />
    </div>

  </Router>
export default App;


