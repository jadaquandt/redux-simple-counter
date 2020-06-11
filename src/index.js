const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT", payload: 1 }));

//1) Add a decrement button that decreases the counter by 1 when clicked.
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT", payload: 1 }));

//2) Add a +5 button and a -5 button.
const decrement5Button = document.getElementById('decrement5');
decrement5Button.addEventListener('click', e => dispatch({ type: "DECREMENT", payload: 5 }));

const increment5Button = document.getElementById('increment5');
increment5Button.addEventListener('click', e => dispatch({ type: "INCREMENT", payload: 5 }));

//3) Add a dropdown with the values "red", "green", and "blue". Make it change the color of the counter (You'll have to make your own "color" property in the state!)
const colorSelect = document.getElementById('color');
colorSelect.addEventListener('change', (e) => {
    const color = e.target.value;
    dispatch({ type: 'CHANGE_COLOR', payload: color });
});

//4) Add a text field that lets the user set the counter value to whatever number they enter
const numberInput = document.getElementById('userNumber');
numberInput.addEventListener('change', (e) => {
    const number = e.target.value;
    dispatch({ type: 'CHANGE_NUMBER', payload: number })
});