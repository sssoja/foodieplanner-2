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

class RecipeInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
    };
  }

  componentDidMount() {
    fetch(`/recipe/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipe: response });
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
                          <Typography
                            variant="h6"
                            style={{ color: "rgb(33, 48, 55)" }}
                            gutterBottom
                          >
                            Ready in minutes: {this.state.recipe.readyInMinutes}
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ color: "rgb(33, 48, 55)" }}
                          >
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
                            <Typography>{this.state.recipe.summary}</Typography>
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
                  <Typography variant="h4">Ingredients</Typography>
                  <hr />
                  <div>
                    <div>
                      <Box p={2}>
                        <div>
                          <ul>--></ul>
                          <ul>--></ul>
                          <ul>--></ul>
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
