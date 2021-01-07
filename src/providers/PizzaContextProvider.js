import { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";

const initialState = {ingredients: [{name: "pork cut", category: "meat"}, {name: "tomato", category: "vegetables"}, {name: "mozzarella", category: "cheese"}]}

const itemsReducer = (state, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
          state.ingredients.push({name: action.name, category: action.category})
          return {
              //
          };
        }
        default: return state;
    }

    return state;
}

export const PizzaContext = createContext();

export const PizzaProvider = ({children, ...rest}) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState);

    return (
        <>
            <PizzaContext.Provider value={[state, dispatch]}>
                {children}
            </PizzaContext.Provider>
        </>
    );
}
