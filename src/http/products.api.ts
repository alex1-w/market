import { IProduct } from "@/types/IProduct";
import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints: builder => ({

        getProducts: builder.query({
            query: () => '/products'
        }),

        createProduct: builder.mutation({
            query: (body: IProduct) => ({
                url: '/products',
                method: 'POST',
                body
            })
        })
    })
})

