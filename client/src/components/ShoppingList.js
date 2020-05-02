// import React, { Component } from 'react';
// import Typography from "@material-ui/core/Typography";
// //import Box from "@material-ui/core/Box";
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: '36ch',
//         backgroundColor: theme.palette.background.paper,
//     },
//     inline: {
//         display: 'inline',
//     },
// }));


// export default class ShoppingList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             recipes: this.props.location.state.recipesPlanner,
//             ingredients: [],
//             ingredientsName: [],
//             ingredientsImage: []
//         }
//     };

//     componentDidMount() {
//         this.fetchIngredientsFromRecipes();
//     }

//     async fetchIngredientsFromRecipes() {
//         for (let i = 0; i < this.state.recipes.length; i++)
//         {
//             let response = await fetch(`recipe/${this.state.recipes[i].id}/ingredientWidget`);
//             let json = await response.json();
//             this.setState({ ingredients: [...this.state.ingredients, json] });
//         }
//         await this.fetchIngredientsName();
//         await this.fetchIngredientsImage();
//     }

//     fetchIngredientsName() {
//         for (let i = 0; i < this.state.ingredients.length; i++)
//         {
//             let array = this.state.ingredients[i].ingredients
//             for (let j = 0; j < array.length; j++)
//             {
//                 this.setState({ ingredientsName: [...this.state.ingredientsName, array[j].name] });
//             }
//         };
//     }

//     fetchIngredientsImage() {
//         for (let i = 0; i < this.state.ingredients.length; i++)
//         {
//             let array = this.state.ingredients[i].ingredients
//             for (let j = 0; j < array.length; j++)
//             {
//                 this.setState({ ingredientsImage: [...this.state.ingredientsImage, array[j].image] });
//             }
//         };
//     }



//     render() {
//         const classes = useStyles();
//         return (
//             //         <div>
//             //             <Box p={3}>
//             //                 <Typography variant="h4">Shopping List</Typography>
//             //             </Box>
//             //             <Box p={3}>
//             //                 {this.state.ingredientsImage.map((ingredient, index) => {
//             //                   return (
//             //                   <div key={index}>
//             //                         <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient} />
//             //                   </div>
//             //                   );
//             //                 })}
//             //             </Box>
//             //         </div>

//             <List className={classes.root}>
//                 <Divider variant="inset" component="li" />
//                 <ListItem alignItems="flex-start">
//                     {this.state.ingredientsImage.map((ingredient, index) => {
//                         return (
//                             <ListItemAvatar key={index}>
//                                 <Avatar src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient} />
//                             </ListItemAvatar>
//                         );
//                     })}
//                     {/* <Avatar alt="Remy Sharp" src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient} /> */}
//                     <ListItemText
//                         primary="TEST TEXT"
//                         secondary={
//                             <React.Fragment>
//                                 <Typography
//                                     component="span"
//                                     variant="body2"
//                                     className={classes.inline}
//                                     color="textPrimary"
//                                 >
//                                     Shopping List
//                                 </Typography>

//                                 {/* {this.state.ingredientsImage.map((ingredient, index) => {
//                                     return (
//                                         <div key={index}>
//                                         </div>
//                                     );
//                                 })} */}
//                             </React.Fragment>
//                         }
//                     />
//                 </ListItem>
//             </List>
//         );
//     }
// }
