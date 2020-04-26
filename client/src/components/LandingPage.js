import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";


export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dietValue: "vegan",
            eggValue: false,
            dairyValue: false,
            glutenValue: false,
            excludeIngredientValue: "",
            cuisineValue: "",
            diet: "",
            excludeIngredients: "",
            intolerances: "",
            cuisine: "",
            recipes: [],
            setOpen: false,
            open: false
        }
    }
    
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
      }
    
    handleCheckChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.checked
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    
    submit() {
        if(this.state.eggValue === true) {
            this.setState({
                intolerances: "egg"
            });
        }
        this.setState({
            diet: this.state.dietValue,
            excludeIngredients: this.state.excludeIngredientValue,
            cuisine: this.state.cuisineValue,
            setOpen: true
        });
        fetch(`/recipe/search/${this.state.diet}/${this.state.excludeIngredients}/${this.state.intolerances}/${this.state.cuisine}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ recipes: response });
        });
    }

    render() {
        return (
            <div>
                <img width="100%" src="/dishes.jpg"/>
                <br/>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6} >
                        <br/>
                            <Paper><Box p={3}>                  
                                <Typography variant="h4">Create your weekly meal planner</Typography>
                                <hr/>
                                <div>
                                <FormControl component="fieldset">
                                <Box p={2}>
                                    <FormLabel component="legend"><Typography style={{ color: 'rgb(33, 48, 55)' }} variant="h6">Choose your diet:</Typography></FormLabel>
                                    
                                    <RadioGroup aria-label="diet" name="dietValue" value={this.state.dietValue} onChange={this.handleChange}>
                                        <FormControlLabel value="vegan" control={<Radio style={{ color: 'rgb(248, 183, 53)' }}/>} label="Vegan" />
                                        <FormControlLabel value="lacto-vegetarian" control={<Radio style={{ color: 'rgb(248, 183, 53)' }}/>} label="Lacto Vegetarian" />
                                        <FormControlLabel value="ovo-vegetarian" control={<Radio style={{ color: 'rgb(248, 183, 53)' }}/>} label="Ovo Vegetarian" />
                                        <FormControlLabel value="paleo" control={<Radio style={{ color: 'rgb(248, 183, 53)' }}/>} label="Paleo" />
                                    </RadioGroup>
                                    </Box>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl component="fieldset">
                                    <Box p={2}>
                                        <FormLabel component="legend"><Typography style={{ color: 'rgb(33, 48, 55)' }} variant="h6">Any intolerances?</Typography></FormLabel>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox style={{ color: 'rgb(248, 183, 53)' }} checked={this.state.eggValue} onChange={this.handleCheckChange} name="eggValue" />}
                                                    label="Egg"
                                                 />
                                                <FormControlLabel
                                                    control={<Checkbox style={{ color: 'rgb(248, 183, 53)' }} checked={this.state.dairyValue} onChange={this.handleCheckChange} name="dairyValue" />}
                                                    label="Dairy"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox style={{ color: 'rgb(248, 183, 53)' }} checked={this.state.glutenValue} onChange={this.handleCheckChange} name="glutenValue" />}
                                                    label="Gluten"
                                                />
                                        </FormGroup>
                                    </Box>
                                    </FormControl>
                                </div>
                                <div>
                                    <Box p={2}>
                                        <TextField label="Exclude ingredient" type="text" name="excludeIngredientValue" onChange={this.handleChange}/>
                                    </Box>
                                </div>
                                <div>
                                    <Box p={2}>
                                        <FormControl>
                                            <InputLabel>Cuisine</InputLabel>
                                                <Select
                                                    native
                                                    value={this.state.cuisineValue}
                                                    onChange={this.handleChange}
                                                    name="cuisineValue"
                                                    >
                                                    <option aria-label="None" value="" />
                                                    <option value={"italian"}>Italian</option>
                                                    <option value={"chinese"}>Chinese</option>
                                                    <option value={"mexican"}>Mexican</option>
                                                </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div>
                                    <Box p={2}>
                                        <div>
                                            <Button onClick={e => this.submit()} variant="contained" style={{ backgroundColor: 'rgb(43, 137, 139)' , color: 'white'}}>
                                                Submit
                                            </Button>
                                        </div>
                                        <br/>
                                        <div>
                                            <Link to={{
                                                pathname: '/meal-planner',
                                                state: {
                                                    recipesPlanner: this.state.recipes
                                                }
                                                }} style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" style={{ backgroundColor: 'rgb(43, 137, 139)' , color: 'white'}}>
                                                Get Meal Planner
                                            </Button>       
                                            </Link>
                                        </div>
                                    </Box>
                                </div>
                            </Box></Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <br/>
                        <Paper><Box p={3}>                  
                                <Typography variant="h4">Get recipe ideas</Typography>
                                <hr/>
                                <div>
                                
                                </div>
                            </Box></Paper>
                        </Grid>
                    </Grid>
                </Container>
                {/* <Modal
                    open={this.state.setOpen}
                    onClose={this.state.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    
    </div>
                </Modal> */}
            </div>
        )
    }
}
