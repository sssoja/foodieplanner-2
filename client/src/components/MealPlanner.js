import React from "react";


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
            </div>
        );
    }
}


export default mealPlanner;
