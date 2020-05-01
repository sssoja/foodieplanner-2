import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


class mealPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.location.state.recipesPlanner.results

        }
    };

    render() {
        return (
            <div>
                <div>
                {this.state.recipes.map((recipe, index) => {
                      return (
                      <div key={index}>
                            <img src={"https://spoonacular.com/recipeImages/" + recipe.id + "-480x360.jpg"} />
                        <div>{recipe.title}</div>
                      </div>
                      );
                      })}
                </div>
                <div>
                    <Link
                    to={{
                    pathname: "/shopping-list",
                    state: {
                        recipesPlanner: this.state.recipes,
                    },
                    }}
                    style={{ textDecoration: "none" }}
                    >
                        <Button
                        variant="contained"
                        style={{
                            backgroundColor: "rgb(43, 137, 139)",
                            color: "white",
                        }}
                        >
                        Get Shopping List
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default mealPlanner;
