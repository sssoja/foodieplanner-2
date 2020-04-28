import React from "react";


class mealPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.location.state

        }
    };

    componentDidMount() {
        this.getmealPlanner();
    }

    getmealPlanner = async () => {
        await fetch(`/recipe/search/:diet/:excludeIngredients/:intolerances/:cuisine${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ mealPlanner: response });
            });
    };

    render() {
        return (
            <div className="table">
                <h1> Weekly Meal Planner</h1>
                <table id="mealplanner">
                    <th>Weekly Meal Plan</th>
                    <tr>Monday</tr>
                    <tr>Tuesday</tr>
                    <tr>Wednesday</tr>
                    <tr>Thursday</tr>
                    <tr>Friday</tr>
                    <tr>Saturday</tr>
                    <tr>Sunday</tr>
                </table>


                <button className="btn btn-secondary" onClick={e => this.mealPlanner(e)}>Generate shopping list</button>
            </div>
        );
    }
}


export default mealPlanner;
