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

const Ingredients = (props) => {
  const [state, dispatch] = useContext(PizzaContext);
  const [curcategory, setcurCategory] = useState("meat");
  const [curname, setcurName] = useState("");
  const listItems = state.ingredients.map((link) =>
    <ListGroupItem><b>{link.name}</b>, <i>category {link.category}</i></ListGroupItem>
  );

  const addNewIngredient = () => {
    dispatch({type: ADD_INGREDIENT, name: curname, category: curcategory});
  }

  return (
    <main>
      <div class="w-50 m-auto pt-3 pb-3" >
        <FormGroup>
          <Input required type="text" name="name" placeholder="name of ingredient" onChange={e => {setcurName(e.target.value);}} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select category</Label>
          <Input type="select" name="category" id="category" onChange={e => {setcurCategory(e.target.value);}}>
            <option>meat</option>
            <option>vegetables</option>
            <option>cheese</option>
          </Input>
        </FormGroup>
        <Button onClick={addNewIngredient}>Add new ingredient</Button>
      </div>

      <ListGroup className="list-ingr">
        {listItems}
      </ListGroup>
    </main>
  );
}

export default Ingredients;
