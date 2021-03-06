import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const ADD = (favorite) => ({
    type: ADD_ITEM,
    payload: favorite
});

const REMOVE = (id) => ({
    type: REMOVE_ITEM,
    payload: id
});

const appActions = {
    ADD,
    REMOVE
};

export default appActions;