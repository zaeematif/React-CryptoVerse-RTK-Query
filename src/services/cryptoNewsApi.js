import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "75f0cceae2mshda6292dbf4c107bp1667d1jsn9fcc0c3541e9",
  "x-rapidapi-host": "seeking-alpha.p.rapidapi.com",
};

const baseUrl = "https://seeking-alpha.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) =>
        createRequest(
          `/news/v2/list?size=${count}&category=market-news%3A%3Aall&number=1`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
