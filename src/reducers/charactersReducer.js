const initialState = {
    characters: [],
    selectedCharacter: null,
    loading: true,
    searchTerm: ""
  };
  
  const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CHARACTERS":
        return {
          ...state,
          characters: action.payload,
          loading: false
        };
      case "SET_SELECTED_CHARACTER":
        return {
          ...state,
          selectedCharacter: action.payload
        };
      case "CLEAR_SELECTED_CHARACTER":
        return {
          ...state,
          selectedCharacter: null
        };
      case "SET_SEARCH_TERM":
        return {
          ...state,
          searchTerm: action.payload
        };
      default:
        return state;
    }
  };
  
  export default charactersReducer;
  