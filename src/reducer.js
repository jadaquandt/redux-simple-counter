const initialState = {
    value: 0,
    color: 'black'
}

const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    if (type === "INCREMENT") { 
        return {
            ...state,
            value: state.value + payload
        };
    }
    //1) Add a decrement button that decreases the counter by 1 when clicked.
    if (type === "DECREMENT") {
        return {
            ...state,
            value: state.value - payload
        };
    }
    if (type === "CHANGE_COLOR") {
        return {
            ...state,
            color: payload
        };
    }
    if (type === "CHANGE_NUMBER") {
        return {
            ...state,
            value: parseInt(payload)
        };
    }
    return state
}