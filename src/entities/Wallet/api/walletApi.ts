import { baseApi } from 'shared/api/baseApi';
import { BLOCKFROST_API_KEY } from 'shared/constants/env';

export const walletApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecificAccount: build.query<{ pool_id: string }, { stakeAddress: string }>({
            query: ({ stakeAddress }) => ({
                url: `https://cardano-mainnet.blockfrost.io/api/v0//accounts/${stakeAddress}`,
                method: 'GET',
                headers: { project_id: BLOCKFROST_API_KEY },
                providesTags: ['Transaction'],
            }),
        }),
    }),
    overrideExisting: false,
});
