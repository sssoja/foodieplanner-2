import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

class RecipeBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.location.state,
    };
  }

  componentDidMount() {
    //   const { handle } = this.props.match.params
    //   const { fromGetRecipes } = this.props.location.state

    fetch(`/recipe/findByIngredients/${this.state.ingredients}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipes: response });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Paper>
            <Typography variant="h4">Recipe Browser</Typography>
            <Grid>
              <Card>
                <Link></Link>
              </Card>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default RecipeBrowser;
