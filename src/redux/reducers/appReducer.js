import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const initialState = {
  favorites: []
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state = {
        favorites: [...state.favorites, action.payload]
      };
      return state;

    case REMOVE_ITEM:
      state = {
        favorites: state.favorites.filter((favorite) => favorite.id !== action.payload)
      };
      return state;

    default:
      return state;
  }
}