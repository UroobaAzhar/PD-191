import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// by the way this is our api endpoint: https://dummyjson.com/products
// the products part will go into endpoints
// for search, our endpoint is 'https://dummyjson.com/products/search?q=phone'
// we want the query q=${} dynamic
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
