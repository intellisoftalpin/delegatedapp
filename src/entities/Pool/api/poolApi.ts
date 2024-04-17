import { baseApi } from 'shared/api/baseApi';

import { SpecificPool } from '../model/types/PoolSchema.ts';

export const poolApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecificStakePool: build.query<{ data: SpecificPool }, string>({
            query: (poolId) => ({
                url: `https://api.adastat.net/rest/v1/pools/${poolId}.json`,
                method: 'GET',
            }),
        }),
        submitTransaction: build.mutation<string, Uint8Array>({
            query: (cbor) => ({
                url: `https://pool.blackrocket.space/api/submit/tx/`,
                method: 'POST',
                body: cbor,
                headers: { 'Content-Type': 'application/cbor' },
                invalidatesTags: ['Transaction'],
            }),
        }),
    }),
    overrideExisting: false,
});
