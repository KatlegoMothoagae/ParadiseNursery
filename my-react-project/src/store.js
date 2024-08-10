import { configureStore } from '@reduxjs/toolkit';
// import venueReducer from './venueSlice';
import plantReducer from './plantSlice';
const store = configureStore({
    reducer: {
        plant: plantReducer,
    },
});

export default store;