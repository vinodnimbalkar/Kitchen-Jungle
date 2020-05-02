export const recipieReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDRECIPIE":
      return [action.payload];
    case "GETRECIPIE":
      return [...action.payload];
    case "DELETERECIPIE":
      console.log(action.id);
      let filteredRecipe = state.filter((item) => item._id !== action.id);
      console.log(filteredRecipe);
      return filteredRecipe;

    default:
      return state;
  }
};
