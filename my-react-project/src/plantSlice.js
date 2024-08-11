import { createSlice } from "@reduxjs/toolkit";
// import lotus from "assets/lotus.jpg"
export const plantSlice =  createSlice( {
    name: "plants",
    initialState: [
        {
            img: 'src/assets/lotus.jpg',
            name: "Lotus",
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
                   console.log("YEEEEEEEEEEEEEESSSS"+item.quantity);
                   item.quantity = item.quantity - 1;
                   console.log("YEEEEEEEEEEEEEESSSS"+item.quantity);
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
            // console.log("ITEM")
            // console.log(item.name);
            if (item) {
                item.quantity = Number(action.payload.value.valueOf());
            }
        },
            setItems_old: (state, action) => {
               // const  {index, amount} = action.payload
                const item = state[action.payload];
               // const item = state[action.payload];
                console.log("SET ITEM!!!!!!!!!!!!")
                console.log(`state ${state}`);
                console.log(`payload ${action.payload}`);
                console.log(`amount ${amount}`);
                // const item = state[index];
               console.log(item)
               if(item) {
                   item.quantity = amount;
                   console.log("NEW QUANTITY BABAAAY")
                   console.log(item.quantity);
               }
            }
    },
});

export const { setItems, increment, decrement, reset } = plantSlice.actions;
export default plantSlice.reducer;