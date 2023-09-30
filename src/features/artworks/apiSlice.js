import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getAllArtworks: builder.query({
      query: () => "data/artworks.json",
    }),
  }),
});

export const { useGetAllArtworksQuery } = apiSlice;
