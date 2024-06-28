import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} = api;

// Explicitly type the hooks
type UseGetKpisQuery = typeof useGetKpisQuery;
type UseGetProductsQuery = typeof useGetProductsQuery;
type UseGetTransactionsQuery = typeof useGetTransactionsQuery;

export {
  useGetKpisQuery as useGetKpisQueryTyped,
  useGetProductsQuery as useGetProductsQueryTyped,
  useGetTransactionsQuery as useGetTransactionsQueryTyped,
};
