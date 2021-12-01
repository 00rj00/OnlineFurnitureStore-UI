const initialState = {
  furnitures: [],
  furniture: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FURNITURES":
      return { ...state, furnitures: [...action.payload] };
    case "GET_FURNITURE":
      return { ...state, furniture: action.payload };
    case "ADD_FURNITURE":
      return { ...state, furnitures: [...furnitures, action.payload] }; 
    case "DELETE_FURNITURE":
      const furnitures = state.furnitures.filter((p) => p.id !== action.payload.id); 
      return { ...state, furnitures: furnitures };
    case "UPDATE_FURNITURE":
      return state.furnitures.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
    default:
      return state;
  }
};
export default homeReducer;