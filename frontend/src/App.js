import Navbar from './components/nav'
import Home from './components/home'
import Recipes from './components/recipes'
import Favorites from './components/favorites'
import RecipeDetails from './components/recipeDetails'
import { Switch, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/recipes/" exact component={Recipes}/>
        <Route path="/recipes/:id" component={RecipeDetails}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </div>
  )
}

export default App;