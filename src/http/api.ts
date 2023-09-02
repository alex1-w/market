import { IBrand, IProduct } from '@/types/IProduct'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:5000/api'

export const api = createApi({

    reducerPath: 'api',
    refetchOnFocus: false,

    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),

    endpoints: (build) => ({

        registration: build.mutation({
            query: body => (
                {
                    url: '/user/registration',
                    method: 'POST',
                    body,
                })
        }),

        login: build.mutation({
            query: body => ({
                url: '/user/authentication',
                method: 'POST',
                body,
            })
        }),

        getBrands: build.query<IBrand, void>({
            query: () => ({
                url: '/brands',
                method: 'GET',

            }),
        }),

        createBrand: build.mutation({
            query: body => ({
                url: '/brand',
                method: 'POST',
                body,
            })
        }),

        createProduct: build.mutation({
            query: (body: IProduct) => ({
                url: '/products',
                method: 'POST',
                body: body
            })
        }),
    })
})

export const { useRegistrationMutation, useLoginMutation, useCreateBrandMutation, useCreateProductMutation, useGetBrandsQuery } = api 