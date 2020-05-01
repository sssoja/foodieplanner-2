import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
    console.log(ingredients);

    fetch(`/recipe/findByIngredients/${ingredients}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipes: response });
      });
  }

  useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 345,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  });

  render() {
    const classes = makeStyles();
    return (
      <div className={classes.root}>
        <Container>
          <Box p={3}>
            <Typography variant="h4">Choose your recipe</Typography>
          </Box>

          {this.state.recipes.map((recipe) => {
            return (
              <div>
                <Grid>
                  <Grid item xs>
                    <Card className={classes.root} variant="outlined">
                      <CardContent>
                        <Typography variant="h6">{recipe.title}</Typography>
                        <br></br>
                        <Link
                          to={`/recipe/${recipe.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <CardMedia className={classes.media} />{" "}
                          <img
                            src={
                              "https://spoonacular.com/recipeImages/" +
                              recipe.id +
                              "-480x360.jpg"
                            }
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <div>
                  <Box p={2}></Box>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default RecipeBrowser;
