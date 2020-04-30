import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


export default class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.location.state.recipesPlanner,
            ingredients: [],
            ingredientsName: [],
            ingredientsImage: []
        }
    };

     componentDidMount() {
        this.fetchIngredientsFromRecipes();
    }

    async fetchIngredientsFromRecipes() {
        for(let i = 0; i<this.state.recipes.length; i++) {
            let response = await fetch(`recipe/${this.state.recipes[i].id}/ingredientWidget`);
            let json = await response.json();
            this.setState({ ingredients: [...this.state.ingredients, json]});     
        }
        await this.fetchIngredientsName();
        await this.fetchIngredientsImage();
    }

    fetchIngredientsName() {
        for(let i=0; i<this.state.ingredients.length; i++) {
            let array = this.state.ingredients[i].ingredients
             for(let j=0; j<array.length; j++){
                this.setState({ ingredientsName: [...this.state.ingredientsName, array[j].name]});
            }
        };
    }

    fetchIngredientsImage() {
        for(let i=0; i<this.state.ingredients.length; i++) {
            let array = this.state.ingredients[i].ingredients
             for(let j=0; j<array.length; j++){
                this.setState({ ingredientsImage: [...this.state.ingredientsImage, array[j].image]});
            }
        };
    }

    

    render() {
        return (
            <div>
                <Box p={3}>
                    <Typography variant="h4">Shopping List</Typography>
                </Box>
                <Box p={3}>
                    {this.state.ingredientsImage.map((ingredient, index) => {
                      return (
                      <div key={index}>
                            <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient} />
                      </div>
                      );
                    })}
                </Box>
            </div>
        )
    }
}

