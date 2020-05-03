import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class mealPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.location.state.recipesPlanner.results,
            imgExt: []
        }
    };

    componentDidMount(){
        let imgExt= []
        for(let i=0; i<this.state.recipes.length; i++) {
            let ext = this.state.recipes[i].image.split('.').pop();
            imgExt.push(ext);         
        }
        this.setState({ imgExt: imgExt}); 
    }

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
                <Box p={5}>
                <div> 
                    <br/>
                    <Typography variant="h4">Meal Planner</Typography>
                    <br/>
                    <Grid container spacing={5}
                    
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Grid container item xs={12} spacing={6}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>

                                       {/*  {this.state.recipes[0].title} */}
                                        <Link to={`/recipe/${this.state.recipes[0].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[0].id + "-90x90." + this.state.imgExt[0]} />
                                        </Link>


                                </Grid>
                                <Grid item xs={1}>
                                   {/* {this.state.recipes[1].title} */}
                                        <Link to={`/recipe/${this.state.recipes[1].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[1].id + "-90x90.jpg"} />
                                        </Link>
  
                                </Grid>
                                <Grid item xs={1}>
    {/* {this.state.recipes[2].title} */}
                                        <Link to={`/recipe/${this.state.recipes[2].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[2].id + "-90x90.jpg"} />
                                        </Link>

                                </Grid>
                                <Grid item xs={1}>
                                 {/* {this.state.recipes[3].title} */}
                                        <Link to={`/recipe/${this.state.recipes[3].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[3].id + "-90x90.jpg"} />
                                        </Link>
                             
                                </Grid>
                                <Grid item xs={1}>
                              {/* {this.state.recipes[4].title} */}
                                        <Link to={`/recipe/${this.state.recipes[4].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[4].id + "-90x90.jpg"} />
                                        </Link>
                              
                                </Grid>
                                <Grid item xs={1}>
                                    {/* {this.state.recipes[5].title} */}
                                        <Link to={`/recipe/${this.state.recipes[5].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[5].id + "-90x90.jpg"} />
                                        </Link>
                             
                                </Grid>
                                <Grid item xs={1}>
                                 {/* {this.state.recipes[6].title} */}
                                        <Link to={`/recipe/${this.state.recipes[6].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[6].id + "-90x90.jpg"} />
                                        </Link>
                                   
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center">
                        <Grid container item xs={12} spacing={6}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>
                                {/* {this.state.recipes[7].title} */}
                                        <Link to={`/recipe/${this.state.recipes[7].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[7].id + "-90x90.jpg"} />
                                        </Link>
                                  
                                </Grid>
                                <Grid item xs={1}>
                               {/* {this.state.recipes[8].title} */}
                                        <Link to={`/recipe/${this.state.recipes[8].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[8].id + "-90x90.jpg"} />
                                        </Link>
                                 
                                </Grid>
                                <Grid item xs={1}>
                              {/* {this.state.recipes[9].title} */}
                                        <Link to={`/recipe/${this.state.recipes[9].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[9].id + "-90x90.jpeg"} />
                                        </Link>
                                 
                                </Grid>
                                <Grid item xs={1}>
                                  {/* {this.state.recipes[10].title} */}
                                        <Link to={`/recipe/${this.state.recipes[10].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[10].id + "-90x90.jpg"} />
                                        </Link>
                                 
                                </Grid>
                                <Grid item xs={1}>
                                {/* {this.state.recipes[11].title} */}
                                        <Link to={`/recipe/${this.state.recipes[11].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[11].id + "-90x90.jpg"} />
                                        </Link>
                                    
                                </Grid>
                                <Grid item xs={1}>
                                  {/* {this.state.recipes[12].title} */}
                                        <Link to={`/recipe/${this.state.recipes[12].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[12].id + "-90x90.jpg"} />
                                        </Link>
                                 
                                </Grid>
                                <Grid item xs={1}>
                                  {/* {this.state.recipes[13].title} */}
                                        <Link to={`/recipe/${this.state.recipes[13].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[13].id + "-90x90.jpg"} />
                                        </Link>
                                  
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid >
                    <Grid container spacing={3}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center">
                        <Grid container item xs={12} spacing={6}> {/* this is a row */}
                            <React.Fragment>
                                <Grid item xs={1}>
                                    {/* {this.state.recipes[14].title} */}
                                        <Link to={`/recipe/${this.state.recipes[14].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[14].id + "-90x90.jpg"} />
                                        </Link>
                                    
                                </Grid>
                                <Grid item xs={1}>
                                    {/* {this.state.recipes[15].title} */}
                                        <Link to={`/recipe/${this.state.recipes[15].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[15].id + "-90x90.jpg"} />
                                        </Link>
                                   
                                </Grid>
                                <Grid item xs={1}>
                                   {/* {this.state.recipes[16].title} */}
                                        <Link to={`/recipe/${this.state.recipes[16].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[16].id + "-90x90.jpeg"} />
                                        </Link>
                                 
                                </Grid>
                                <Grid item xs={1}>
                                    {/* {this.state.recipes[17].title} */}
                                        <Link to={`/recipe/${this.state.recipes[17].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[17].id + "-90x90." + this.state.imgExt[17]} />
                                        </Link>
                                    
                                </Grid>
                                <Grid item xs={1}>
                                    {/* {this.state.recipes[18].title} */}
                                        <Link to={`/recipe/${this.state.recipes[18].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[18].id + "-90x90.jpg"} />
                                        </Link>
                                  
                                </Grid>
                                <Grid item xs={1}>
                                  {/* {this.state.recipes[19].title} */}
                                        <Link to={`/recipe/${this.state.recipes[19].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[19].id + "-90x90.jpg"} />
                                        </Link>
                                   
                                </Grid>
                                <Grid item xs={1}>
                                  {/* {this.state.recipes[20].title} */}
                                        <Link to={`/recipe/${this.state.recipes[20].id}`}>
                                            <img src={"https://spoonacular.com/recipeImages/" + this.state.recipes[20].id + "-90x90.jpg"} />
                                        </Link>
                                    
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid >
                </div>
                <br/>
                <br/>
                <div style={{ textAlign: "center" }}>
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
                <br/>
                </Box>
            </div >
        );
    }
}


export default mealPlanner;
