export const initialState = {
    user: null,
    age: null
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    REMOVE_USER: 'REMOVE_USER',
    SET_AGE: 'SET_AGE',
    REMOVE_AGE: 'REMOVE_AGE'
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null
            };
        case actionTypes.SET_AGE:
            return {
                ...state,
                age: action.age
            };
        case actionTypes.REMOVE_AGE:
            return {
                ...state,
                age: null
            };
        default:
            return state;
    }
};

export default reducer;