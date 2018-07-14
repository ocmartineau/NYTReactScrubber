import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" 
import TitleBox from "./components/titlebox"
import './App.css';
import SearchBox from './components/searchbox/searchbox';


const App = () =>

  <Router>

    <div>
      <TitleBox/>
      <Route exact path="/" component={SearchBox} />
    </div>

  </Router>
export default App;


