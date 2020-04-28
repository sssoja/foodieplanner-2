import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';

class RecipeInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: this.props.location.state,
    };
  }

  componentDidMount() {
    //   const { handle } = this.props.match.params
    //   const { fromGetRecipes } = this.props.location.state

    fetch(`/recipe/:id/${this.state.instructions}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ instructions: response });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Paper>
            <Typography variant="h4">Recipe</Typography>
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

export default RecipeInstructions;
