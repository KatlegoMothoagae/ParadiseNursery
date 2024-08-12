import { createSlice } from "@reduxjs/toolkit";
import lotus from "../public/assets/lotus.jpg";
import lily from "../public/assets/peace-lily.png";
import aloe from "../public/assets/aloe-vera.jpg";
import evergreen from "../public/assets/Chinese-Evergreen.jpg";
import dracaena from "../public/assets/Dracaena.jpg";
import spider from "../public/assets/Spider-Plant.jpg";
import haworthia from "../public/assets/Haworthia.jpg";
import jade from  "../public/assets/jade-plant.jpg";

export const plantSlice =  createSlice( {
    name: "plants",
    initialState: [
        {
            img: lotus,
            name: "Lotus",
            cost: 18,
            quantity: 0,
            summary: "Graceful and serene, perfect for indoor tranquility.",
            type: "air purifying plant",
        },
        {
            img: lily ,
            name: "Peace lily",
            cost: 28,
            quantity: 0,
            summary: "Air-purifying beauty that thrives in low light",
            type: "air purifying plant",
        },
        {
            img: aloe,
            name: "Aloe Vera ",
            cost: 28,
            quantity: 0,
            summary: "Healing and decorative, a natural skin soother.",
            type: "air purifying plant",
        },
        {
            img: evergreen,
            name: "Chinese Evergreen",
            cost: 49,
            quantity: 0,
            summary: "Low-light champion with vibrant leaves.",
            type: "low-light",
        },
        {
            img: dracaena,
            name: "Dracaena",
            cost: 49,
            quantity: 0,
            summary: "Elegant and hardy, ideal for shaded spaces.",
            type: "low-light",
        },
        {
            img: spider,
            name: "Spider Plant",
            cost: 49,
            quantity: 0,
            summary: "Resilient and easy-care, great for beginners.",
            type: "low-light",
        },
        {
            img: haworthia,
            name: "Haworthia",
            cost: 49,
            quantity: 0,
            summary: "Compact succulent, perfect for sunny spots.",
            type:  "succulents",
        },
        {
            img: jade,
            name: "Jade Plant",
            cost: 49,
            quantity: 0,
            summary: "Sturdy and symbolic, brings good fortune.",
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