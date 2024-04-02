import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({});

export const baseApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Transaction'],
    endpoints: () => ({}),
});
