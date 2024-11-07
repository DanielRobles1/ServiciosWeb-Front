import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            keepUnusedDataFor: 5, //change
        })
    }) 
})

export const{
    useGetProductQuery
} = productsApiSlice