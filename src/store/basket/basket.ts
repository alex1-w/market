import { IProductResponse } from "@/types/IProduct";
import { createSlice } from "@reduxjs/toolkit";

interface IBasketProduct {
    product: IProductResponse,
    count: number
}

const initialState: IBasketProduct[] = []

export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {

        addToBasket: (state, { payload: product }) => {
            if (state.find(p => p.product.id === product.id)) {
                state.map(item => item.product.id === product.id ? ++item.count : item.count)
            } else {
                state.push({ product, count: 1 })
            }
        },

        reduceProductInBasket: (state, { payload: id }) => {
            const currentProduct = state.find(p => p.product.id === id)

            if (currentProduct?.count !== 0) {
                state.map(item => item.product.id === currentProduct?.product.id ? --item.count : item.count)
            } else {
                return state.filter(item => item.product.id !== currentProduct.product.id)
            }
        },

        deleteProduct: (state, { payload: product }) => {
            const exist = state.find(p => p.product.id === product)

            if (exist) {
                const i = state.findIndex(p => p.product.id === product)
                if (i !== -1) state.splice(i, 1)
            }
        },

        cleanBasket: (state) => { state.length = 0 },
    }
})

export const { actions, reducer } = basketSlice