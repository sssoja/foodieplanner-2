import React from 'react';
import './App.css';
import 'typeface-roboto';
import LandingPage from './components/LandingPage';
//import MealPlanner from './components/MealPlanner';
/*import ShoppingList from './components/ShoppingList';
import RecipePage from './components/RecipePage';
import BrowseRecipes from './components/BrowseRecipes'; */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar>
          <Toolbar style={{ backgroundColor: 'rgb(43, 137, 139)' }} variant="dense">
            <Link
              to="/"
              style={{ textDecoration: 'none' }}>
              <Typography style={{ color: 'white' }} variant="h2">
                <Box letterSpacing={4} m={2}>Foodie Planner</Box>
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          {/*<Route path="/meal-planner" exact component={MealPlanner} />
          <Route path="/shopping-list" exact component={ShoppingList} />
          <Route path="/recipe/:id" component={RecipePage} />
          <Route path="/recipes-by-ingredients" component={BrowseRecipes} /> */}
        </Switch>
      </div>
    </Router>
  );
}
