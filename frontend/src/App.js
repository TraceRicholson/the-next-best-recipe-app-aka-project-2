import Navbar from './components/nav'
import Home from './components/home'
import Recipes from './components/recipes';
import Favorites from './components/favorites'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from 'react'



function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/recipes" component={Recipes}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </div>
  )
}

export default App;