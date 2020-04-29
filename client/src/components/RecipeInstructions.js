import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';

class RecipeInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     recipe: []
    };
  }

  componentDidMount() {
    fetch(`/recipe/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ recipe: response });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Paper>
            <Typography variant="h4">Recipe</Typography>
            <Grid>
              <Card></Card>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default RecipeInstructions;
