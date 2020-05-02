import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class mealPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.location.state.recipesPlanner.results

        }
    };

    // useStyles = makeStyles({
    //     root: {
    //         minWidth: 275,
    //         maxWidth: 345,
    //     },
    //     title: {
    //         fontSize: 14,
    //     },
    //     pos: {
    //         marginBottom: 12,
    //     },
    //     media: {
    //         height: 0,
    //         paddingTop: "56.25%", // 16:9
    //     },
    // });

    render() {
        //const classes = makeStyles();
        return (
            <div>
                <div>
                    <Typography variant="h4">Meal Planner</Typography>
                    <Grid container spacing={3}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Grid container item xs={12} spacing={6}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>
                                    <Paper>
                                        {this.state.recipes[0].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[0].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[1].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[1].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[2].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[2].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[3].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[3].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[4].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[4].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[5].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[5].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[6].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[6].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[7].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[7].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[8].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[8].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[9].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[9].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[10].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[10].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[11].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[11].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[12].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[12].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[13].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[13].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid >
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[14].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[14].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[15].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[15].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[16].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[16].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[17].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[17].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[18].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[18].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[19].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[19].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper>{this.state.recipes[20].title}
                                        <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[20].id + "-480x360.jpg"} />
                                    </Paper>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid >
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
            </div >
        );
    }
}


export default mealPlanner;
