import { createSlice } from "@reduxjs/toolkit";
// import lotus from "assets/lotus.jpg"
export const plantSlice =  createSlice( {
    name: "plants",
    initialState: [
        {
            img: 'https://pixabay.com/get/g3c3aa92b90bb5cc533fab1d860fdade4873463b3c0397e40883c0d527d93417b9b7a5670b5ead88374001626bb24b6a3f50026a601e8bf9b4ff0b7976f0cae04_1280.jpg',
            name: "Lotus",
            cost: 18,
            quantity: 0,
            summary: "yada yada yada",
            type: "air purifying plant",
        },
        {
            img: 'https://pixabay.com/get/gcf57256690d154a68196270ffb1b647e68ae5adb128834d7cd7b026298be85b579c4754aeea469a1e7b3fa73efae503c15a779ea43f7cff11d6f62ea9efaa895_1280.jpg',
            name: "Botus",
            cost: 28,
            quantity: 0,
            summary: "yida yada yada",
            type: "air purifying plant",
        },
        {
            img: 'https://pixabay.com/get/g9e5e2095abc92c3f53cb18de233a4adfd89a69dce6ee72b3792505d6738db81deceee478656e997efd00c48eafaf75cad361e5f46a5e4eb070efc033a824db3a_1280.jpg',
            name: "Aloe Vera ",
            cost: 28,
            quantity: 0,
            summary: "Does something cool!!",
            type: "air purifying plant",
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
            }
    },
});

export const { increment, decrement } = plantSlice.actions;
export default plantSlice.reducer;