import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.location.state,
      recipes: [],
    };
  }

  componentDidMount() {
    let ingredients = this.state.ingredients.ingredientsForRecipes.toString();

    fetch(`/recipe/findByIngredients/${ingredients}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipes: response });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Box p={3}>
            <Typography variant="h4">Choose your recipe &#128073;</Typography>
          </Box>
          <Grid
            container
            container
            spacing={4}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {this.state.recipes.map((recipe) => {
              return (
                <Grid container item xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader title={recipe.title}></CardHeader>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CardMedia />{" "}
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          recipe.id +
                          "-480x360.jpg"
                        }
                      />
                    </Link>
                    <CardContent></CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default RecipeBrowser;
