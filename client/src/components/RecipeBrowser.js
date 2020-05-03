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
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.location.state,
      recipes: [],

      snippet: "",
    };
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    let ingredients = this.state.ingredients.ingredientsForRecipes.toString();
    fetch(`/recipe/findByIngredients/${ingredients}`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ recipes: response });
    });
  }
/* 
  async fetchRecipes() {
    let ingredients = await this.state.ingredients.ingredientsForRecipes.toString();
    let response = await fetch(`/recipe/findByIngredients/${ingredients}`);
        let json = await response.json();
        this.setState({ recipes: json}); 
  } */


  useStyles = makeStyles({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    root: {
      flexGrow: 1,
    },
  });

  render() {
    const classes = makeStyles();
    return (
      <div>
        <Container>
          <Box p={3}>
            <Typography variant="h4">Choose your recipe &#128073;</Typography>
          </Box>

          <Grid container className={classes.root}>
            {this.state.recipes.map((recipe) => {
              return (
                <Grid xs={12} sm={6} md={3}>
                  <br></br>
                  <Card>
                    <CardHeader title={recipe.title}></CardHeader>
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
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                  <br></br>
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