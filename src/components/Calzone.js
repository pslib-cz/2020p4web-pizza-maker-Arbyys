import React, { useState } from 'react';
import {
  ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useContext} from "react";
import { PizzaContext, ADD_INGREDIENT } from "../providers/PizzaContextProvider";

const Calzone = (props) => {
  const [selectedIngredients, setselectedIngredients] = useState([]);

  const addIngredientToList = (selected) => {
    const index = selectedIngredients.indexOf(selected);
    if (index < 0) {
      selectedIngredients.push(selected);
    } else {
      selectedIngredients.splice(index, 1);
    }
    setselectedIngredients([...selectedIngredients]);
  }

  const orderIngredients = () => {

    const obj = {ingredients:[]};

    for (const key of selectedIngredients) {
      obj.ingredients.push({name: key});
    }

    console.log(obj.ingredients)

  }

  const [state, dispatch] = useContext(PizzaContext);
  const listItems = state.ingredients.map((link) =>
    <ListGroupItem><Button className="" outline color="success" onClick={() => addIngredientToList(link.name)} active={selectedIngredients.includes(link.name)}>add</Button> <b>{link.name}</b>, <i>category {link.category}</i></ListGroupItem>
  );

  return (
    <main>
      <span class="text-center">
        <h1>Calzone</h1>
      </span>

      <ListGroup className="list-ingr">
        {listItems}
      </ListGroup>

      <div class="text-center mt-4">
        <Button className="m-auto" outline color="info" onClick={() => orderIngredients()}>Order</Button>
        <br />
        <span>(vypíše do console)</span>
      </div>
    </main>
  );
}

export default Calzone;
