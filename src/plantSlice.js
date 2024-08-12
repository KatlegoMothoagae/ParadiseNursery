import { createSlice } from "@reduxjs/toolkit";
import lotus from "../public/assets/lotus.jpg";
export const plantSlice =  createSlice( {
    name: "plants",
    initialState: [
        {
            img: lotus,
            name: lotus,
            cost: 18,
            quantity: 0,
            summary: "yada yada yada",
            type: "air purifying plant",
        },
        {
            img: 'src/assets/peace-lily.png',
            name: "Peace lily",
            cost: 28,
            quantity: 0,
            summary: "yida yada yada",
            type: "air purifying plant",
        },
        {
            img: 'src/assets/aloe-vera.jpg',
            name: "Aloe Vera ",
            cost: 28,
            quantity: 0,
            summary: "Does something cool!!",
            type: "air purifying plant",
        },
        {
            img: 'src/assets/Chinese-Evergreen.jpg',
            name: "Chinese Evergreen",
            cost: 49,
            quantity: 0,
            summary: "Does something cool!!",
            type: "low-light",
        },
        {
            img: 'src/assets/Dracaena.jpg',
            name: "Dracaena",
            cost: 49,
            quantity: 0,
            summary: "Does something cool!!",
            type: "low-light",
        },
        {
            img: 'src/assets/Spider-Plant.jpg',
            name: "Spider Plant",
            cost: 49,
            quantity: 0,
            summary: "Does something cool!!",
            type: "low-light",
        },

        {
            img: 'src/assets/Haworthia.jpg',
            name: "Haworthia",
            cost: 49,
            quantity: 0,
            summary: "Does something cool!!",
            type:  "succulents",
        },
        {
            img: 'src/assets/jade-plant.jpg',
            name: "Jade Plant",
            cost: 49,
            quantity: 0,
            summary: "Does something cool!!",
            type: "succulents",
        },
    ],
    reducers : {
           increment: (state, action) => {
               const item = state[action.payload];
               if (item) {
                   item.quantity = item.quantity + 1;
               }
           },
            decrement: (state, action) => {
               const item = state[action.payload];
               if(item && item.quantity > 0) {
                   item.quantity = item.quantity - 1;
               }
            },
            reset: (state, action) => {
               const item = state[action.payload];
               if(item && item.quantity > 0) {
                   item.quantity = 0;
               }
            },
        setItems: (state, action) => {
            const item = state[action.payload.plantIndex];
            if (item) {
                item.quantity = Number(action.payload.value.valueOf());
            }
        },

    },
});

export const { setItems, increment, decrement, reset } = plantSlice.actions;
export default plantSlice.reducer;