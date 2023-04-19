import * as actionTypes from "./components/actionTypes";

const initialState = {
  characters: [],
  selectedCharacter: null,
  loading: true,
  searchTerm: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };
    case actionTypes.SET_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.character,
      };
    case actionTypes.CLEAR_SELECTED_CHARACTER:
      return {
        ...state,
        selectedCharacter: null,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};

export default rootReducer;
