import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

class RecipeInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      analyzedInstructions: [],
      ingredients: [],
      summary: "",
    };
  }

  componentDidMount() {
    this.fetchRecipes();
    this.fetchIngredients();
  }

  fetchIngredients() {
    fetch(`/recipe/${this.props.match.params.id}/ingredientWidget`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ ingredients: response.ingredients });
      });
  }

  fetchRecipes() {
    fetch(`/recipe/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipe: response });

        let steps = [];
        if (this.state.recipe.analyzedInstructions[0]) {
          let arrayOfSteps = this.state.recipe.analyzedInstructions[0].steps;
          for (let i = 0; i < arrayOfSteps.length; i++) {
            steps.push(arrayOfSteps[i].step);
          }
          this.setState({ analyzedInstructions: steps });
        } else {
          let summary = this.state.recipe.summary;
          this.setState({ summary: summary });
        }
      });
  }

  useStyles = makeStyles({
    root: {
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <br />
              <Paper>
                <Box p={3}>
                  <Typography variant="h4">
                    {this.state.recipe.title}
                  </Typography>
                  <hr />
                  <div>
                    <Box p={2}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">
                            Ready in minutes:{" "}
                            <b>{this.state.recipe.readyInMinutes}</b>
                          </Typography>
                          <Typography variant="h6">
                            Serves: {this.state.recipe.servings}
                          </Typography>
                          <br></br>
                          <CardMedia className={classes.media} />{" "}
                          <img
                            src={
                              "https://spoonacular.com/recipeImages/" +
                              this.state.recipe.id +
                              "-480x360.jpg"
                            }
                          />
                          <div>
                            <br></br>
                            <Typography>
                              <div>
                                {!this.state.analyzedInstructions
                                  ? this.state.summary
                                  : this.state.analyzedInstructions.map(
                                      (step, index) => (
                                        <div key={index}>
                                          <ol>
                                            {index + 1}. {step}
                                          </ol>
                                        </div>
                                      )
                                    )}
                              </div>
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Box>
                  </div>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <br />
              <Paper>
                <Box p={3}>
                  <Typography variant="h4">Ingredients </Typography>
                  <hr />
                  <div>
                    <div>
                      <Box p={2}>
                        <div>
                          <Typography variant="subtitle1">
                            {this.state.ingredients.map((ingredient, index) => (
                              <div key={index}>
                                <ul>
                                  &#10004;&nbsp;&nbsp;
                                  {ingredient.amount.metric.value}{" "}
                                  {ingredient.amount.metric.unit}{" "}
                                  <b>{ingredient.name}</b>
                                </ul>
                              </div>
                            ))}
                          </Typography>
                        </div>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default RecipeInstructions;
